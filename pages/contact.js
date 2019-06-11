import Layout from '../components/Layout'

const Contact = () => (
  <Layout
    pageTitle='Nick Warwick | Contact Me'
    metaContent='I am always open to talk. Give me a call or send me an email!'
    navTitle='Contact Me'
    canonicalUrl='https://nwarwick.info/contact'
  >
    <div className='contact-page'>
      <div className='wrapper'>
        <a href='mailto:nicholaswarwick@icloud.com'>
          nicholaswarwick@icloud.com
        </a>
        <a href='tel:2508026425'>(250) 802-6425</a>
      </div>
    </div>
  </Layout>
)

export default Contact
