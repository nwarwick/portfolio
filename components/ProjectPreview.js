// import Link from 'next/link'
// import Router from '../routes'
import { Link, Router } from '../routes'

const ProjectPreview = props => {
  const {previewImg, title, previewDescription, id} = props.project

  return (
  <div className='project-preview'>
    <img className='project-preview-img' src={previewImg} alt='Project' />
    <h2>{title}</h2>
    <p>{previewDescription}</p>
    <Link route='project-page' params={{ slug: id }}>
      <a className='test'>
        Learn More
      </a>
    </Link>
  </div>)
}

export default ProjectPreview
