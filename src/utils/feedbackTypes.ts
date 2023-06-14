import { BugIMG, IdeaIMG, ThoughtIMG } from '../assets/index'

export const feedbackTypes = {
  BUG: {
    id: 1,
    title: 'Problema',
    image: {
      source: BugIMG,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    id: 2,
    title: 'Ideias',
    image: {
      source: IdeaIMG,
      alt: 'Imagem de uma lâmapada',
    },
  },
  OTHERS: {
    id: 3,
    title: 'Outro',
    image: {
      source: ThoughtIMG,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}
