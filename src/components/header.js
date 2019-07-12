import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../assets/images/Opinta-white.svg"
import logoB from "../assets/images/Opinta.svg"
const Header = ({ siteTitle, headerClass }) => (
  <header className={headerClass}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="main-nav">
            <Link to="/" className="logo">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="light-logo"
                  src={logo}
                  style={{ width: "120px" }}
                  alt="Gaus"
                />
                <img
                  className="dark-logo"
                  src={logoB}
                  style={{ width: "120px" }}
                  alt="Gaus"
                />
              </div>
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
            <div
              className="menu-trigger"
              onClick={() => {
                if (document.querySelector(".nav").style.display === "none") {
                  document.querySelector(".nav").style.display = "block"
                  document
                    .querySelector(".menu-trigger")
                    .classList.add("active")
                } else {
                  document.querySelector(".nav").style.display = "none"
                  document
                    .querySelector(".menu-trigger")
                    .classList.remove("active")
                }
              }}
            >
              <span>Menu</span>
            </div>
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
