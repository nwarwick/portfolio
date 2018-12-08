import Layout from '../components/Layout'

const About = () => (
  <Layout
    pageTitle='Nick Warwick | Projects'
    metaContent='A list of a few projects I have completed.'
    navTitle='About Me'
  >
    <div className='about-page'>
      <div className='container-sm'>
        <div className='wrapper'>
          <img className='about-me-image' src='/static/img/me.jpg' alt='Me' />
          <p>
            I am a Computer Science graduate from the University of Victoria. I
            have a passion for software/web development and design. I am always
            excited to learn new tools and techniques and to work with awesome
            people.
          </p>
          <p>
            When I'm not programming I enjoy short walks on the beach, hiking,
            playing video games, or hanging out with friends!
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
