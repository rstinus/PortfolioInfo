// MODIF: Project data — Option A (hardcoded TypeScript arrays) (Traduit en FR)
export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  gradient: [string, string] // from / to gradient colors for the card header
}

export const projects: Project[] = [
  {
    title: 'Plugin mini-jeux minecraft',
    description:
      "Plugin permettant de joué à trois jeux emblématique de minecraft (Spleef, Blockparty, Tntrun). Différente configuration sont possible pour les minijeux.",
    tags: ['Java'],
    github: 'https://github.com/rstinus/voiture-bloc',
    gradient: ['#06b6d4', '#0ea5e9'],
  },
  {
    title: 'Appli chat instantané',
    description:
      "Application permettant la communication à plusieurs comme sur un serveur. Différente options d'administration sont possible sur le serveur.",
    tags: ['C'],
    github: 'https://github.com/rstinus/cdm-rugby',
    gradient: ['#10b981', '#059669'],
  },
  {
    title: 'Site utilisateur',
    description:
      "Site d'information pour les utilisateurs et participants de nos évènement minecraft.",
    tags: ['Nuxt', 'tailwind CSS', 'prisma', 'SQL'],
    github: 'https://github.com/rstinus/SiteWebutilisateur',
    gradient: ['#10b981', '#059669'],
  },
  {
    title: 'Site connexion SSH',
    description:
      "Site permettant la connexion SSH sur le web.",
    tags: ['React', 'JavaScript', 'SQL'],
    github: 'https://github.com/rstinus/ssh-web-interface',
    gradient: ['#10b981', '#059669'],
  },
  {
    title: 'Jeu multi controleur',
    description:
      "Application permettant de joué sur un écran avec son téléphone comme manette.",
    tags: ['Go'],
    github: 'https://github.com/rstinus/multi-controler-game',
    gradient: ['#10b981', '#059669'],
  },
]