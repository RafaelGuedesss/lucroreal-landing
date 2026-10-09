#!/usr/bin/env bash
# Prepara um vídeo tutorial para o site:
#   - acrescenta uma tela final (3s) com o nome do app e o endereço do site,
#     no mesmo fundo azul-escuro dos vídeos
#   - padroniza em 720px de largura (mantém a proporção original), H.264 + AAC,
#     com faststart (começa a tocar antes de baixar tudo)
#   - gera o poster (capa) em public/video/posters/
#
# Uso:  bash scripts/preparar-tutorial.sh <video-original.mp4> <nome> [segundo-do-poster]
# Ex.:  bash scripts/preparar-tutorial.sh ~/Downloads/gravacao.mp4 tutorial-abastecimento
#       -> public/video/tutorial-abastecimento.mp4 + public/video/posters/tutorial-abastecimento.jpg
# Depois, adicione o vídeo em lib/tutorials.ts (o script imprime o "aspect").

set -euo pipefail

IN="${1:?informe o vídeo de entrada}"
NAME="${2:?informe o nome de saída (ex: tutorial-metas)}"
POSTER_AT="${3:-1}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/video/$NAME.mp4"
POSTER="$ROOT/public/video/posters/$NAME.jpg"
SITE="www.mylucroreal.com.br"
END_SECONDS=3
W=720
BG=0x1C263A

FONT_TITLE="C\\:/Windows/Fonts/arialbi.ttf"
FONT_BOLD="C\\:/Windows/Fonts/arialbd.ttf"
FONT_REG="C\\:/Windows/Fonts/arial.ttf"

mkdir -p "$ROOT/public/video/posters"

has_audio=$(ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "$IN" | head -1)
dur_in=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$IN" | tr -d '\r')
read -r iw ih < <(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$IN" | tr -d '\r' | tr x ' ')
# Altura proporcional à largura de 720 (arredondada para par, exigência do H.264)
H=$(( (W * ih / iw) / 2 * 2 ))

# Vídeo principal, mantendo a proporção da gravação
main_v="[0:v]scale=${W}:${H},setsar=1,fps=30,format=yuv420p[mv]"
# Áudio do mesmo tamanho do vídeo (silêncio se a gravação não tiver som)
if [ -n "$has_audio" ]; then
  main_a="[0:a]aresample=44100,aformat=channel_layouts=stereo,apad,atrim=0:${dur_in}[ma]"
  audio_inputs=()
else
  main_a="[1:a]aresample=44100,aformat=channel_layouts=stereo[ma]"
  audio_inputs=(-f lavfi -t "$dur_in" -i anullsrc=r=44100:cl=stereo)
fi

# Posições relativas à altura (funciona em 9:16 e 9:20)
t1=$(( H * 38 / 100 ))
t2=$(( t1 + 130 ))
t3=$(( t2 + 50 ))
t4=$(( t3 + 90 ))

# Tela final: mesmo fundo azul-escuro e laranja dos vídeos
end_v="color=c=${BG}:s=${W}x${H}:r=30:d=${END_SECONDS},\
drawtext=fontfile='${FONT_TITLE}':text='Lucro Real':fontcolor=0xF97316:fontsize=80:x=(w-text_w)/2:y=${t1},\
drawtext=fontfile='${FONT_REG}':text='Mais tutoriais em':fontcolor=0xA1A1AA:fontsize=32:x=(w-text_w)/2:y=${t2},\
drawtext=fontfile='${FONT_BOLD}':text='${SITE}':fontcolor=0xFFFFFF:fontsize=44:x=(w-text_w)/2:y=${t3},\
drawtext=fontfile='${FONT_REG}':text='Baixe grátis na Google Play':fontcolor=0xA1A1AA:fontsize=32:x=(w-text_w)/2:y=${t4},\
fade=t=in:st=0:d=0.4:color=${BG},setsar=1,format=yuv420p[ev];\
anullsrc=r=44100:cl=stereo,atrim=0:${END_SECONDS}[ea]"

ffmpeg -y -v error -stats \
  -i "$IN" "${audio_inputs[@]}" \
  -filter_complex "${main_v};${main_a};${end_v};[mv][ma][ev][ea]concat=n=2:v=1:a=1[v][a]" \
  -map "[v]" -map "[a]" \
  -c:v libx264 -preset slow -crf 26 -profile:v high -pix_fmt yuv420p \
  -c:a aac -b:a 96k -ac 2 \
  -movflags +faststart \
  "$OUT"

# Poster (capa): um quadro do vídeo; o 3º argumento escolhe o segundo
ffmpeg -y -v error -ss "$POSTER_AT" -i "$OUT" -frames:v 1 -q:v 4 "$POSTER"

dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT" | tr -d '\r')
echo "OK: $OUT ($(du -h "$OUT" | cut -f1), ${dur%.*}s)"
echo "    $POSTER"
echo "    aspect para lib/tutorials.ts: '${iw} / ${ih}'"
