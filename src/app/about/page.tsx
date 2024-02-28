import Container from '@/components/shared/Container'
import PageHero from '@/components/PageHero'
import AIchat from './_components/AIchat'

const page = () => {
  return (
    <>
      <Container>
        <PageHero
          title='ABOUT ME'
          text="Skip the mundane bio— I've programmed an AI model with theessentials about me. He has named himself Kjartan. Ask away!"
        />
        <AIchat />
      </Container>
    </>
  )
}
export default page
