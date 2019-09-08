const withSass = require('@zeit/next-sass')
const projects = require('./static/js/data')

module.exports = withSass({
  experimental: {
    exportTrailingSlash: false
  },
  async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' }
    }
  }
})
