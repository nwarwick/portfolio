import '../static/scss/application.scss'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>{props.pageTitle}</title>
      <meta name='author' content='Nick Warwick' />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
      <meta name='description' content={props.metaContent} />
    </Head>
    <Nav navTitle={props.navTitle} />
    <main className='main-content'>{props.children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
