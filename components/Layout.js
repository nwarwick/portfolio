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
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-87075310-2`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-87075310-2');
          `
        }}
      />
    </Head>
    {props.navTitle && <Nav navTitle={props.navTitle} />}
    <main>{props.children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
