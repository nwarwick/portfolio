const Nav = props => (
  <nav className="navbar">
    <h1>{props.pageTitle}</h1>
    <div>
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
      <a href="/resume">Resume</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
)

export default Nav
