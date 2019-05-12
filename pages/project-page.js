import Layout from '../components/Layout'
import projects from '../static/js/data'
import Error from 'next/error'

export default class ProjectPage extends React.PureComponent {
  static async getInitialProps({ query, res }) {
    const project = projects.find(project => project.id === query.id)

    if (!project && res) {
      return { error: { statusCode: 404 } }
    }

    return { project }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { project, error } = this.props

    return (
      <React.Fragment>
        {error ? (
          <Error statusCode={error.statusCode} />
        ) : (
          <Layout
            pageTitle='Nick Warwick | Freelance Web Developer and Designer'
            metaContent='My name is Nick Warwick. I am a fullstack web developer and designer living in Victoria British Columbia, Canada. I am available for freelance work. I can build and design websites and web applications as well as apply SEO standards.'
          >
            <div className='project-page'>
              <div className='grid-container'>
                <div className='project'>
                  <h1>{project.title}</h1>
                  <h2>What is it?</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.fullDescription
                    }}
                  />
                  <h2>What was used to make it?</h2>
                  <ul>
                    {project.technology.map((item, id) => {
                      return <li key={id}>{item}</li>
                    })}
                  </ul>
                  <h2>Where is it?</h2>
                  <p>{project.url}</p>
                  <a href='/projects'>Back</a>
                </div>
                <div className='project-image'>
                  <img src={project.fullImg} alt='Project screen shot' />
                </div>
              </div>
            </div>
          </Layout>
        )}
      </React.Fragment>
    )
  }
}
