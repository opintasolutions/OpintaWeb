import React from "react"
// import { lazy, Suspense } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

// import style assets
import "../assets/css/bootstrap.min.css"
// import "../assets/css/font-awesome.min.css"
import "../assets/css/blue.css"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

// import img from "../assets/images/Opinta-white.svg"
// import investIndia from "../assets/images/investindia-logo.png"
// import cBridgeLogo from "../assets/images/C-Bridge-Logo.svg"

// const Header = lazy(() => import("./header"))
// const Footer = lazy(() => import("./footer"))

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
        {
          /* <div className="loader-wrapper">
          <div className="loader">
            <div className="diamond" />
            <div className="diamond" />
            <div className="diamond" />
          </div>
        </div> */
          // <Suspense
          //   maxDuration={800}
          //   fallback={
          //     <div className="loader-wrapper">
          //       <div className="loader">
          //         <div className="diamond" />
          //         <div className="diamond" />
          //         <div className="diamond" />
          //       </div>
          //     </div>
          //   }
          // >
        }
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700&subset=latin-ext"
          />
        </Helmet>
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
          <Footer />
        </div>
        {
          // </Suspense>
        }
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
