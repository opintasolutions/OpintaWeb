import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style.css"

const OurWorkPage = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Work" />
    <section className="page">
      <div className="cover" data-image="../assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Our Work</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">Our Work</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <Img
                      fluid={data.smsa.childImageSharp.fluid}
                      className="img-apps-colored"
                      alt=""
                    />
                  </div>
                  <div className="app-title">
                    <h5 className="title">SMSA Infracon</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <Img
                      fluid={data.tconnect.childImageSharp.fluid}
                      className="img-apps-colored"
                      alt=""
                    />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Trawis Connect</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <Img
                      fluid={data.goodmorningnews.childImageSharp.fluid}
                      className="img-apps-colored"
                      alt=""
                    />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Good Morning News</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <Img
                      fluid={data.matc.childImageSharp.fluid}
                      className="img-apps-colored"
                      alt=""
                    />
                  </div>
                  <div className="app-title">
                    <h5 className="title">M.A.T.C.</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <Img
                      fluid={data.jankarijunction.childImageSharp.fluid}
                      className="img-apps-colored"
                      alt=""
                    />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Jankari Junction</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <Img
                      fluid={data.kns.childImageSharp.fluid}
                      className="img-apps-colored"
                      alt=""
                    />
                  </div>
                  <div className="app-title">
                    <h5 className="title">KNS Restaurant</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default OurWorkPage

export const pageQuery = graphql`
  query {
    smsa: file(relativePath: { eq: "apps/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tconnect: file(relativePath: { eq: "apps/Trawis Connect.png" }) {
      childImageSharp {
        fluid(maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jankarijunction: file(relativePath: { eq: "apps/4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kns: file(relativePath: { eq: "apps/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    goodmorningnews: file(relativePath: { eq: "apps/GoodMorningNews.png" }) {
      childImageSharp {
        fluid(maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    matc: file(relativePath: { eq: "apps/matc.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    opintavideo: file(relativePath: { eq: "Opinta-Video.png" }) {
      childImageSharp {
        fluid(maxWidth: 445) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
