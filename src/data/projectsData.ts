type ProjectsTypes = {
  id: number
  title: string
  slug: string
  categories: string[]
  year: string
  thumbnailImg: string
  description: string
}

export const ProjectsData: ProjectsTypes[] = [
  {
    id: 1,
    title: 'PROJECT 1',
    slug: 'project-one',
    categories: ['UX/UI-Design', 'Front-end development', 'Webflow CMS'],
    year: '2023',
    thumbnailImg: '/mock.jpg',
    description:
      'Skyworker was released in 2021 as the fist product by Aboveit. Its a SaaS project management app for small to medium size craftsman companies.',
  },
  {
    id: 2,
    title: 'PROJECT 2',
    slug: 'project-two',
    categories: ['UX/UI-Design', 'Front-end development', 'Webflow CMS'],
    year: '2023',
    thumbnailImg: '/mock.jpg',
    description:
      'Skyworker was released in 2021 as the fist product by Aboveit. Its a SaaS project management app for small to medium size craftsman companies.',
  },
]
