import { Component } from 'react'
import data from '../static/js/data'
import Layout from '../components/Layout'

export default class extends Component {
  static async getInitialProps({ query }) {
    // fetch single post detail
    const project = data.find(project => {
      return project.slug === query.slug
    })
    return { ...project }
  }

  render() {
    const {
      title,
      metaDescription,
      slug,
      location,
      fullImg,
      technology,
      fullDescription
    } = { ...this.props }

    return (
      <Layout
        pageTitle={`Projects - ${title}`}
        metaContent={metaDescription}
        canonicalUrl={`https://nwarwick.info/projects/${slug}`}
      >
        <div className='project-page'>
          <div className='grid-container'>
            <div className='project'>
              <h1 className='project-title'>{title}</h1>
              <h2>What is it?</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: fullDescription
                }}
              />
              <h2>What was used to make it?</h2>
              <ul>
                {technology.map((item, id) => {
                  return <li key={id}>{item}</li>
                })}
              </ul>
              <h2>Where is it?</h2>
              <a href={location} target='_blank'>
                {location}
              </a>
              <a className='btn' href='/projects'>
                Back
              </a>
            </div>
            <div className='project-image'>
              <img src={fullImg} alt='Project screen shot' />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
