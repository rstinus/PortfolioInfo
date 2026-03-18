// MODIF: Project data — Option A (hardcoded TypeScript arrays)
export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  gradient: [string, string] // from / to gradient colors for the card header
}

export const projects: Project[] = [
  {
    title: 'Jeu de voiture',
    description:
      'A 2D top-down car racing game with real-time physics, collision detection, and a lap timer. Built in Go with a custom game loop.',
    tags: ['Go'],
    github: 'https://github.com/remystinus',
    gradient: ['#06b6d4', '#0ea5e9'],
  },
  {
    title: 'Appli CDM Rugby',
    description:
      'Full-stack team management application for a rugby club: player rosters, match scheduling, and live score tracking.',
    tags: ['React', 'Java', 'SQL'],
    github: 'https://github.com/remystinus',
    gradient: ['#10b981', '#059669'],
  },
]
