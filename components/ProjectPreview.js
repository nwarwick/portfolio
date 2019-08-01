import Link from 'next/link'

const ProjectPreview = props => {
  const { previewImg, title, previewDescription, slug } = props.project

  return (
    <div className='project-preview'>
      <img className='project-preview-img' src={previewImg} alt='Project' />
      <h2>{title}</h2>
      <p>{previewDescription}</p>
      <Link href={`/projects/${slug}`}>
        <a className='test'>Learn More</a>
      </Link>
    </div>
  )
}

export default ProjectPreview
