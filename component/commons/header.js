import Link from 'next/link'

const Header = () => {
    return (
        <header className="header-global">
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
      <div className="container">
      <Link href="/">
        <a className="navbar-brand mr-lg-5" >
          <img src="/assets/img/brand/white.png" alt="brand" />
        </a>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="../index.html">
                  <img src="/assets/img/brand/blue.png" alt="brand"/>
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
           
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                <i className="ni ni-collection d-lg-none"></i>
                <span className="nav-link-inner--text">Examples</span>
              </a>
              <div className="dropdown-menu">
                <a href="../examples/landing.html" className="dropdown-item">Landing</a>
                <a href="../examples/profile.html" className="dropdown-item">Profile</a>
                <a href="../examples/login.html" className="dropdown-item">Login</a>
                <a href="../examples/register.html" className="dropdown-item">Register</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav align-items-lg-center ml-lg-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" data-toggle="tooltip" title="Like us on Facebook">
                <i className="fa fa-facebook-square"></i>
                <span className="nav-link-inner--text d-lg-none">Facebook</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial" target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                <i className="fa fa-instagram"></i>
                <span className="nav-link-inner--text d-lg-none">Instagram</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
                <i className="fa fa-twitter-square"></i>
                <span className="nav-link-inner--text d-lg-none">Twitter</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://github.com/creativetimofficial/argon-design-system" target="_blank" data-toggle="tooltip" title="Star us on Github">
                <i className="fa fa-github"></i>
                <span className="nav-link-inner--text d-lg-none">Github</span>
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  </header>

    )
}

export default Header
