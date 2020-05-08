import Layout from '../components/Layout'

const Contact = () => (
  <Layout
    pageTitle='Nick Warwick | Contact Me'
    metaContent='I am always open to talk. Feel free to send me an email to schedule a chat!'
    navTitle='Contact Me'
    canonicalUrl='https://nwarwick.info/contact'
  >
    <div className='contact-page'>
      <div className='wrapper'>
        <a href='mailto:nicholaswarwick@icloud.com'>
          nicholaswarwick@icloud.com
        </a>
      </div>
    </div>
  </Layout>
)

export default Contact
