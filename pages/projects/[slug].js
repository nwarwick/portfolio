import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import data from '../../static/js/data'

export default function Project() {
  const router = useRouter()
  const slug = router.query.slug
  const project = data.find(project => {
    return project.slug === slug
  })

  return (
    <React.Fragment>
      {project && (
        <Layout
          pageTitle={`Projects - ${project.title}`}
          metaContent={project.metaDescription}
          canonicalUrl={`https://nwarwick.info/projects/${project.slug}`}
        >
          <div className='project-page'>
            <div className='grid-container'>
              <div className='project'>
                <h1 className='project-title'>{project.title}</h1>
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
                <a href={project.url} target='_blank'>
                  {project.url}
                </a>
                <a className='btn' href='/projects'>
                  Back
                </a>
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
