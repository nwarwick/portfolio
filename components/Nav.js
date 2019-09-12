import Link from 'next/link'

const Nav = props => (
  <header>
    <nav className='navbar'>
      <h1>{props.navTitle}</h1>
      <div className='navbar-links'>
        <Link prefetch href='/'>
          <a>Home</a>
        </Link>
        <Link prefetch href='/projects'>
          <a>Projects</a>
        </Link>
        <Link prefetch href='/about'>
          <a>About</a>
        </Link>
        <a href='/static/nick-warwick-resume.pdf' download>
          Resume
        </a>
        <Link prefetch href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  </header>
)

export default Nav
