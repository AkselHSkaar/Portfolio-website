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
      <article className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-flow-row gap-4 md:gap-x-7 md:gap-y-7'>
        <div className='relative col-span-2 md:col-span-3 lg:col-span-8 md:row-start-1 aspect-video'>
          <Image src={data.thumbnailImg} alt='image' fill={true} />
        </div>
        <header className='col-span-2 md:col-span-1 lg:col-span-2 flex md:flex-col justify-between md:justify-start row-start-1 md:row-start-2 text-xsmall-regular md:text-small-regular lg:text-regular-regular xl:text-medium-regular 2xl:text-large-regular md:gap-3'>
          <p className=''>
            0{data.id} - {data.title}
          </p>
          <p className='text-right md:text-left'>({data.year})</p>
        </header>
        <p className='col-span-2 lg:col-span-5 text-gray-500 dark:text-gray-200'>
          {data.description}
        </p>
      </article>
    </Link>
  )
}
export default ProjectsItem
