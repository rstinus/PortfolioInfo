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
      "Plugin permettant de jouer à trois jeux emblématiques de minecraft (Spleef, Blockparty, Tntrun). Différentes configurations sont possibles pour les minijeux.",
    tags: ['Java'],
    github: 'https://github.com/rstinus/voiture-bloc',
    gradient: ['#06b6d4', '#0ea5e9'],
  },
  {
    title: 'Appli chat instantané',
    description:
      "Application permettant la communication à plusieurs comme sur un serveur. Différentes options d'administration sont possibles sur le serveur.",
    tags: ['C'],
    github: 'https://github.com/rstinus/cdm-rugby',
    gradient: ['#10b981', '#059669'],
  },
  {
    title: 'Site utilisateur',
    description:
      "Site d'information pour les utilisateurs et participants de nos évènements minecraft.",
    tags: ['Nuxt', 'tailwind CSS', 'prisma', 'SQL'],
    github: 'https://github.com/rstinus/SiteWebutilisateur',
    gradient: ['#10b981', '#059669'],
  },
  {
    title: 'Site connexion SSH',
    description:
      "Site permettant la connexion en SSH sur le web.",
    tags: ['React', 'JS', 'SQL'],
    github: 'https://github.com/rstinus/ssh-web-interface',
    gradient: ['#10b981', '#059669'],
  },
]