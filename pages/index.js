import Layout from '../components/Layout'

const Index = () => (
  <Layout
    pageTitle='Nick Warwick | Freelance Web Developer and Designer'
    metaContent='My name is Nick Warwick. I am a fullstack web developer and designer living in Montreal Canada. I am available for freelance work. I can build and design websites and web applications as well as apply SEO standards.'
    navTitle='Nick Warwick'
    canonicalUrl='https://nwarwick.info'
  >
    <div className='index-page'>
      <div className='tagline'>
        <span>Designer.</span>
        <span>Developer.</span>
        <span>Idea-er.</span>
      </div>
    </div>
  </Layout>
)

export default Index
