import Container from '@/components/shared/Container'
import PageHeader from '@/components/PageHeader'
import AIchat from './_components/AIchat'

const page = () => {
  return (
    <>
      <Container>
        <PageHeader
          title='ABOUT ME'
          text="Skip the mundane bio— I've programmed an AI assistant with the essentials about me. He has named himself Kjartan. Ask away!"
        />
        <AIchat />
      </Container>
    </>
  )
}
export default page
