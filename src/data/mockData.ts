export type Subject = {
  name: string
  shortName: string
  progress: number
  color: 'blue' | 'violet' | 'amber' | 'teal'
  icon: 'brackets' | 'spark' | 'chip' | 'triangle'
}

export type Resource = {
  subject: string
  title: string
  type: string
  updated: string
  color: Subject['color']
  icon: Subject['icon']
}

export const subjects: Subject[] = [
  { name: 'Data Structures & Algorithms', shortName: 'DSA', progress: 72, color: 'blue', icon: 'brackets' },
  { name: 'Machine Learning', shortName: 'ML', progress: 48, color: 'violet', icon: 'spark' },
  { name: 'Computer Organization', shortName: 'CO', progress: 64, color: 'amber', icon: 'chip' },
  { name: 'Linear Algebra', shortName: 'LA', progress: 86, color: 'teal', icon: 'triangle' },
]

export const recentResources: Resource[] = [
  { subject: 'DSA', title: 'Arrays & Strings Notes', type: 'Study notes', updated: 'Today', color: 'blue', icon: 'brackets' },
  { subject: 'Machine Learning', title: 'Probability Lecture', type: 'Lecture slides', updated: 'Yesterday', color: 'violet', icon: 'spark' },
  { subject: 'Computer Organization', title: 'Cache Memory Notes', type: 'Study notes', updated: 'Oct 4', color: 'amber', icon: 'chip' },
  { subject: 'Linear Algebra', title: 'Vector Spaces Notes', type: 'Study notes', updated: 'Oct 2', color: 'teal', icon: 'triangle' },
]
