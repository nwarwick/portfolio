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
      <link
        rel='shortcut icon'
        type='image/x-icon'
        href='/static/favicon.ico'
      />
    </Head>
    {props.navTitle && <Nav navTitle={props.navTitle} />}
    <main>{props.children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
