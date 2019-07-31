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
                    <h5 className="title">Mahila va Bal Vikaas</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Mahila va Bal vikas teacher training website which focuses
                    on women based in Pune, Nashik, Nagpur and Mumbai
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
                    A platform for travellers to meet travel companions, share
                    benefits, promote their creative skills via blogs and sell
                    photos.
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
                    Good Morning News is an online news agency that provide
                    latest news from every corner of Bihar.
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
                    Martial Arts Training Corps. Jharkhand has more than 15
                    branches in the state and many more all over India with 150+
                    black belts.
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
                    Jankari Junction is a new web portal with world record of 16
                    new visitors every second. They cover news of every Indian
                    state.
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
                    KNS is a fast food chain based in Pune. With more than 13
                    restaurents all over the city providing fast foods on
                    demand.
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
        fluid(maxWidth: 75, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tconnect: file(relativePath: { eq: "apps/Trawis Connect.png" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    jankarijunction: file(relativePath: { eq: "apps/4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    kns: file(relativePath: { eq: "apps/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    goodmorningnews: file(relativePath: { eq: "apps/GoodMorningNews.png" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    matc: file(relativePath: { eq: "apps/matc.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
