import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'

const projectList = [
  {
    title: 'Calcohol',
    img: '/static/img/calcohol/calcohol-logo.png',
    description:
      'Calcohol is an application that lets users search for liquor and view a calculated alcohol per dollar (APD) score.'
  },
  {
    title: 'Earthquake Data Visualizer',
    img: '/static/img/earthquake-visualizer/earthquake-visualizer.png',
    description: 'An earthquake data visualization application.'
  },
  {
    title: 'ScheduleX',
    img: '/static/img/schedulex/schedulex.png',
    description: 'Displays a list of upcoming SpaceX launches.'
  },
  {
    title: 'Kozy',
    img: '/static/img/kozy/kozy-logo.png',
    description: 'An ambient sound web app.'
  },
  {
    title: 'Custom Website',
    img: '/static/img/custom-website/code.jpg',
    description: 'This is a custom website I built from scratch for a client.'
  },
  {
    title: 'PaceTheMusic',
    img: '/static/img/ptm/ptm.png',
    description:
      'A program that generates music playlists based on user specified tempos.'
  },
  {
    title: 'DREAMR',
    img: '/static/img/dreamr/logo.png',
    description: 'A Mixed Reality risk/data evaluation and analyisis program.'
  },
  {
    title: 'Chomp',
    img: '/static/img/chomp/chomp-logo.png',
    description: 'A 2D survival game.'
  },
  {
    title: 'Panzer',
    img: '/static/img/panzer/panzer.png',
    description: 'A 2.5D survival game.'
  },
  {
    title: 'Kitten Ninja',
    img: '/static/img/kitten-ninja/kitten-ninja.png',
    description: 'A 2D side scrolling game.'
  }
]

const Projects = () => (
  <Layout
    pageTitle='Nick Warwick | Projects'
    metaContent='A list of a few projects I have completed.'
    navTitle='What have I done?'
  >
    <div className='projects-page'>
      <div className='container'>
        <div className='project-list'>
          {projectList.map((project, id) => {
            return (
              <ProjectPreview
                title={project.title}
                img={project.img}
                description={project.description}
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
