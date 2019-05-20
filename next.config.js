const withSass = require('@zeit/next-sass')
const projects = require('./static/js/data')

module.exports = withSass({
  exportPathMap: function() {
    path = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' }
    }

    // Generate a route for each project with the related data
    projects.map(project => {
      let cleanUrl = project.title
        .trim()
        .toLowerCase()
        .replace(/[\s]+/g, '-')

      path[`/projects/${cleanUrl}`] = {
        page: '/project',
        query: project
      }

      console.log(`Generated page: ${cleanUrl}`)
    })

    return path
  }
})
