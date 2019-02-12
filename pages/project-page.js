import Layout from '../components/Layout'
import projects from '../static/js/data'

export default class ProjectPage extends React.PureComponent {
  static async getInitialProps ({ query, res }) {
    const project = projects.find(project => project.id === query.id)

    if (!project && res) {
      res.statusCode = 404
    }

    return { project }
  }

  constructor(props) {
    super(props)
  }
  
  render() {
    const {title, fullDescription, technology, url, fullImg} = this.props.project

    return (
      <Layout
        pageTitle='Nick Warwick | Freelance Web Developer and Designer'
        metaContent='My name is Nick Warwick. I am a fullstack web developer and designer living in Victoria British Columbia, Canada. I am available for freelance work. I can build and design websites and web applications as well as apply SEO standards.'
      >
        {this.props.project ? (
          <div className='project-page'>
            <div className='grid-container'>
              <div className='project'>
                <h1>{title}</h1>
                <h2>What is it?</h2>
                <div dangerouslySetInnerHTML={{__html: fullDescription}} />
                <h2>What was used to make it?</h2>
                <ul>
                  {technology.map((item, id) => {
                    return <li key={id}>{item}</li>
                  })}
                </ul>
                <h2>Where is it?</h2>
                <p>{url}</p>
                <button>Back</button>
              </div>
              <div className='project-image'>
                  <img src={fullImg} alt="Project screen shot"/>
              </div>
            </div>
          </div>
        ) : (
          <div className='project-page-sorry'>Could not find project :(</div>
        )}
      </Layout>
    )
  }
}
