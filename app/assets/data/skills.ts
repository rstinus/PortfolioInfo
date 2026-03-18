// MODIF: Skills data — Option A (hardcoded TypeScript arrays)
export interface Skill {
  name: string
  icon: string   // Iconify icon name
  level: number  // 0–100
}

export interface SkillCategory {
  label: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Low-Level & Systems',
    icon: 'mdi:chip',
    skills: [
      { name: 'C', icon: 'devicon:c', level: 75 },
    ],
  },
  {
    label: 'Back-End',
    icon: 'mdi:server',
    skills: [
      { name: 'Java', icon: 'devicon:java', level: 80 },
      { name: 'Go', icon: 'devicon:go', level: 65 },
    ],
  },
  {
    label: 'Front-End',
    icon: 'mdi:monitor-shimmer',
    skills: [
      { name: 'React', icon: 'devicon:react', level: 70 },
      { name: 'Nuxt', icon: 'devicon:nuxtjs', level: 65 },
    ],
  },
  {
    label: 'Data & Security',
    icon: 'mdi:shield-lock',
    skills: [
      { name: 'SQL', icon: 'devicon:postgresql', level: 70 },
      { name: 'Networking', icon: 'mdi:lan', level: 60 },
    ],
  },
]
