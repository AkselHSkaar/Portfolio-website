import Link from 'next/link'
import Image from 'next/image'

type ProjectsItemProps = {
  data: ProjectsData
}

type ProjectsData = {
  id: number
  title: string
  slug: string
  categories: Array<string>
  year: string
  thumbnailImg: string
  description: string
}

const ProjectsItem = ({ data }: ProjectsItemProps) => {
  return (
    <Link href={`/${data.slug}`}>
      <article className='grid grid-cols-2 grid-flow-row gap-4'>
        <div className='relative col-span-2 aspect-video'>
          <Image src={data.thumbnailImg} alt='image' fill={true} />
        </div>
        <header className='col-span-2 flex justify-between row-start-1'>
          <p className='text-gray-500'>{data.title}</p>
          <p className='text-right'>({data.year})</p>
        </header>
        <p className='col-span-2 text-secondary-light dark:text-secondary-dark'>
          {data.description}
        </p>
      </article>
    </Link>
  )
}
export default ProjectsItem
