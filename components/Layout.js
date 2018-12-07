import '../static/scss/application.scss'
import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <React.Fragment>
    <Nav pageTitle={props.pageTitle} />
    <main className="main-content">{props.children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
