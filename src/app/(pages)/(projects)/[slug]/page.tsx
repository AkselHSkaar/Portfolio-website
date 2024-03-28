import { ProjectsData } from '@data/projectsData'

const ProjectsPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const project = ProjectsData.find((project) => project.slug === slug)
  return (
    <>
      <h1>Prosjekt: {project?.title}</h1>
      <p>{project?.description}</p>
    </>
  )
}
export default ProjectsPage
