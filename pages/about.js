import Layout from '../components/Layout'

const About = () => (
  <Layout
    pageTitle='Nick Warwick | About Me'
    metaContent='I am a Computer Science graduate from the University of Victoria. I
    have a passion for software/web development and design. I am always
    excited to learn new tools and techniques and to work with awesome
    people.'
    navTitle='About Me'
    canonicalUrl='https://nwarwick.info/about'
  >
    <div className='about-page'>
      <img
        className='about-me-image'
        src='https://res.cloudinary.com/dbiyjyi0a/image/upload/v1547913804/portfolio/me.jpg'
        alt='Me'
      />
      <p>
        I am a Computer Science graduate from the University of Victoria with a
        passion for software/web development and design. I am always eager to
        like-minded people.
      </p>
      <p>
        When I'm not programming I enjoy short walks on the beach, hiking,
        camping, playing video games, or hanging out with friends!
      </p>
    </div>
  </Layout>
)

export default About
