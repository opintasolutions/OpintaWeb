import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/blue.css"

import logo from "../assets/images/blue-logo-white.svg"
import logoB from "../assets/images/blue-logo-dark.svg"
const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <header class="header-area header-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="main-nav">
            <a href="blue-index.html" class="logo">
              <img src={logo} class="light-logo" alt="Gaus" />
              <img src={logoB} class="dark-logo" alt="Gaus" />
            </a>

            <ul class="nav">
              <li>
                <a href="blue-index.html">HOME</a>
              </li>
              <li>
                <a href="blue-our-work.html">OUR WORK</a>
              </li>
              <li>
                <a href="blue-about-us.html">ABOUT US</a>
              </li>
              <li>
                <a href="blue-services.html">SERVICES</a>
              </li>
              <li>
                <a href="blue-blog.html">BLOG</a>
              </li>
              <li>
                <a href="blue-contact.html" class="btn-nav-line">
                  CONTACT
                </a>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
