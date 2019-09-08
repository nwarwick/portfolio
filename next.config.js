const withSass = require('@zeit/next-sass')
const projects = require('./static/js/data')

module.exports = withSass({
  // experimental: {
  //   exportTrailingSlash: false
  // },
  async exportPathMap() {
    const pages = projects.reduce(
      (pages, project) =>
        Object.assign({}, pages, {
          [`/projects/${project.slug}`]: {
            page: '/project',
            query: { slug: project.slug }
          }
        }),
      {}
    )

    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' }
    })
  }
})
