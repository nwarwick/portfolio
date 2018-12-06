const withSass = require('@zeit/next-sass')
// module.exports =

module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' }

    }
  }
})
