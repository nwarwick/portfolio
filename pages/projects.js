import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'
import projects from '../static/js/data'

const Projects = () => (
  <Layout
    pageTitle='Nick Warwick | Projects'
    metaContent='I have completed many projects ranging from games and virtual reality data analysis tools to full-stack web applications.'
    navTitle='What have I done?'
  >
    <div className='projects-page'>
      <div className='container'>
        <div className='project-list'>
          {projects.map((project, id) => {
            return <ProjectPreview project={project} key={id} />
          })}
        </div>
      </div>
    </div>
  </Layout>
)

export default Projects
