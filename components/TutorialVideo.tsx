'use client';

import type { Tutorial } from '@/lib/tutorials';

// Player em moldura de celular, na proporção da gravação de tela.
// Sem autoplay: o usuário dá o play com som. preload="none" evita baixar
// o vídeo antes do clique — o poster aparece no lugar.
export default function TutorialVideo({
  tutorial,
  size = 'md',
}: {
  tutorial: Tutorial;
  size?: 'md' | 'lg';
}) {
  const width = size === 'lg' ? 'w-[300px] sm:w-[320px]' : 'w-[260px] sm:w-[280px]';

  return (
    <div
      style={{ aspectRatio: tutorial.aspect }}
      className={`relative ${width} bg-zinc-900 rounded-[36px] border border-zinc-300 dark:border-white/10 overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.18)] dark:shadow-[0_32px_64px_rgba(0,0,0,0.6)]`}
    >
      <video
        className="w-full h-full object-contain"
        src={tutorial.src}
        poster={tutorial.poster}
        controls
        playsInline
        preload="none"
        aria-label={tutorial.title}
      />
    </div>
  );
}
