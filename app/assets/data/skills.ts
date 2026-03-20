export interface Skill {
  name: string
  icon: string
  level: number
}

export interface SkillCategory {
  label: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Développement Système',
    icon: 'mdi:laptop',
    skills: [
      { name: 'Java', icon: 'devicon:java', level: 85 },
      { name: 'C / C++', icon: 'devicon:cplusplus', level: 80 },
      { name: 'Go', icon: 'devicon:go', level: 65 },
      { name: 'Python', icon: 'devicon:python', level: 75 },
    ],
  },
  {
    label: 'Développement Web',
    icon: 'mdi:web',
    skills: [
      { name: 'Nuxt / Vue', icon: 'devicon:nuxtjs', level: 70 },
      { name: 'React', icon: 'devicon:react', level: 65 },
      { name: 'PHP / JS', icon: 'mdi:language-php', level: 75 },
      { name: 'HTML / CSS', icon: 'devicon:html5', level: 90 },
    ],
  },
  {
    label: 'Infrastructure & Sécu',
    icon: 'mdi:shield-check',
    skills: [
      { name: 'SQL / MySQL', icon: 'devicon:mysql', level: 80 },
      { name: 'Linux / Windows', icon: 'mdi:linux', level: 85 },
      { name: 'Architecture Réseau', icon: 'mdi:lan', level: 75 },
      { name: 'Architecture Système', icon: 'mdi:terminal', level: 60 },
    ],
  },
  {
    label: 'Bureautique & Outils',
    icon: 'mdi:briefcase',
    skills: [
      { name: 'Pack Office', icon: 'mdi:microsoft-office', level: 90 },
      { name: 'Git / GitHub', icon: 'mdi:github', level: 80 },
    ],
  },
]