const ProjectPreview = props => {
  const { previewImg, title, previewDescription, slug } = props.project

  return (
    <div className='project-preview'>
      <img className='project-preview-img' src={previewImg} alt='Project' />
      <h2>{title}</h2>
      <p>{previewDescription}</p>
      <a className='project-preview-link' href={`/projects/${slug}`}>
        Learn More
      </a>
    </div>
  )
}

export default ProjectPreview
