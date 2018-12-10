import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'
import projects from '../api/data'


const Projects = () => (
  <Layout
    pageTitle='Nick Warwick | Projects'
    metaContent='A list of a few projects I have completed.'
    navTitle='What have I done?'
  >
    <div className='projects-page'>
      <div className='container'>
        <div className='project-list'>
          {projects.map((project, id) => {
            return (
              <ProjectPreview
                project={project}
                key={id}
              />
            )
          })}
        </div>
      </div>
    </div>
  </Layout>
)

export default Projects
