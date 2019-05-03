import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../assets/images/blue-logo-white.svg"
import logoB from "../assets/images/blue-logo-dark.svg"
const Header = ({ siteTitle, headerClass }) => (
  <header className={headerClass}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="main-nav">
            <Link to="blue-index.html" className="logo">
              <img src={logo} className="light-logo" alt="Gaus" />
              <img src={logoB} className="dark-logo" alt="Gaus" />
            </Link>

            <ul className="nav">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/our-work/">OUR WORK</Link>
              </li>
              <li>
                <Link to="/about-us/">ABOUT US</Link>
              </li>
              <li>
                <Link to="/services/">SERVICES</Link>
              </li>
              <li>
                <Link to="/blog/">BLOG</Link>
              </li>
              <li>
                <Link to="/contact/" className="btn-nav-line">
                  CONTACT
                </Link>
              </li>
            </ul>
            <Link className="menu-trigger" to="#">
              <span>Menu</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerClass: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  headerClass: ``,
}

export default Header
