const Header = () => {
  return (
    <nav className="navboar" role="navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      </div>
      <div className="navbar-menu"></div>
    </nav>
  )
}

export default Header;