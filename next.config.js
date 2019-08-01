const withSass = require('@zeit/next-sass')
const projects = require('./static/js/data')

module.exports = withSass({
  experimental: {
    exportTrailingSlash: false
  },
  exportPathMap: function() {
    path = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' }
    }

    return path
  }
})
