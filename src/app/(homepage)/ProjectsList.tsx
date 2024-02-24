import Container from '@/components/shared/Container'
import ProjectsItem from './ProjectsItem'
import { ProjectsData } from '@/data/projectsData'

const ProjectsList = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-15 lg:gap-20 xl:gap-23 2xl:gap-26'>
          {ProjectsData.map((project) => (
            <ProjectsItem key={project.id} data={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
export default ProjectsList
