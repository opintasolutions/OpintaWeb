/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import style assets
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/blue.css"

import Header from "./header"
import "./layout.css"

import img from "../assets/images/Opinta-white.svg"
import investIndia from "../assets/images/investindia-logo.png"
import cBridgeLogo from "../assets/images/C-Bridge-Logo.svg"

const Layout = ({ children, headerClass }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <div className="loader-wrapper">
          <div className="loader">
            <div className="diamond" />
            <div className="diamond" />
            <div className="diamond" />
          </div>
        </div> */}
        <Header
          siteTitle={data.site.siteMetadata.title}
          headerClass={headerClass}
        />
        <div
          style={{
            margin: `0`,
            padding: `0px`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-8 col-sm-12">
                  <img
                    src={img}
                    style={{ width: "90px" }}
                    className="logo"
                    alt=""
                  />
                  <div className="text">
                    Opinta Solutions provide the services that refer to the
                    application of business and technical expertise to enable
                    organisation in the creation, management and the
                    optimization of or access to information and business
                    processes.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <img
                      src={investIndia}
                      style={{ width: "150px", margin: "10px 5px 20px 0" }}
                      alt="invest-india-logo"
                    />
                    <img
                      src={cBridgeLogo}
                      style={{ width: "150px", margin: "5px 5px 20px 5px" }}
                      alt="c-bridge-logo"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <h5 style={{ borderBottom: "1px solid #6E49B7" }}>
                    Helpful Links
                  </h5>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        <span>Our Work</span>
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        <span>About Us</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        <span>Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        <span>Blog</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h5 style={{ borderBottom: "1px solid #6E49B7" }}>
                    Our Offices
                  </h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="address">
                        <p>
                          <strong>Patna Office</strong>
                        </p>
                        <p>
                          Chandi Vyapar Bhawan, F-4,
                          <br />
                          4th Floor, Exhibition Rd,
                        </p>
                        <p>Patna, Bihar</p>
                        <p>800001</p>
                        <br />
                        <ul className="social" style={{ marginLeft: "0" }}>
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-google-plus-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-github-square" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="address">
                        <p>
                          <strong>Head Office</strong>
                        </p>
                        <p>
                          GAT NO-123 H.No-3131, 01
                          <br />
                          Moshi - Alandi Rd, Tal Haveli,
                        </p>
                        <p>
                          Alandi, Pune, Maharashtra <br /> 412105
                        </p>
                        <br />
                        <p>Phone: +91 8448450015</p>
                        <p>
                          <span>E-Mail: </span>
                          <a href="#">mail@opintasolutions.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <p className="copyright">
                    &copy; {new Date().getFullYear()} Opinta Solutions. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
