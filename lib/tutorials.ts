// Lista de vídeos tutoriais. Para adicionar um vídeo novo: comprima o mp4 para
// public/video/ com scripts/preparar-tutorial.sh (gera também o poster) e acrescente um item aqui.

export type TutorialCategory = 'Visão geral' | 'Primeiros passos' | 'Corridas' | 'Controle';

export type Tutorial = {
  slug: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  duration: string;
  // Proporção do vídeo (largura / altura), impressa pelo scripts/preparar-tutorial.sh
  aspect: string;
  category: TutorialCategory;
};

export const tutorials: Tutorial[] = [
  {
    slug: 'completo',
    title: 'Como registrar seu turno, passo a passo',
    description:
      'Do play no dia ao fim do turno: odômetro, nova corrida, coleta, entrega e o lucro real de cada etapa, com narração.',
    src: '/video/tutorial-completo.mp4',
    poster: '/video/posters/tutorial-completo.jpg',
    duration: '2 min',
    aspect: '720 / 1280',
    category: 'Visão geral',
  },
  {
    slug: 'resumo',
    title: 'Registre seu turno em 1 minuto',
    description: 'Um resumo rápido: inicie o turno, lance a corrida e veja quanto sobrou de verdade.',
    src: '/video/tutorial-resumo.mp4',
    poster: '/video/posters/tutorial-resumo.jpg',
    duration: '1 min',
    aspect: '720 / 1280',
    category: 'Visão geral',
  },
];

// Vídeo exibido na página inicial
export const featuredTutorial = tutorials.find((t) => t.slug === 'resumo')!;

export const categoryOrder: TutorialCategory[] = ['Visão geral', 'Primeiros passos', 'Corridas', 'Controle'];
