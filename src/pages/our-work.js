import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import appsData from "../data/appsData"
import PageCover from "../components/pageCover"
import "../style.css"

const OurWorkPage = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Work" />
    <section className="page">
      <PageCover
        img=""
        h1="Our Work"
        breadCrumbs={[
          {
            text: "Home",
            link: "/",
            active: false,
          },
          {
            text: "Our Work",
            link: "/our-work",
            active: true,
          },
        ]}
      />
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            {appsData.map(app => (
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Link to="/our-work/#" className="page-app">
                  <div className="app-top">
                    <div className="icon">
                      <Img
                        fluid={data[app.slug].childImageSharp.fluid}
                        className="img-apps-colored"
                        alt=""
                      />
                    </div>
                    <div className="app-title">
                      <h5 className="title">{app.title}</h5>
                    </div>
                  </div>
                  <div className="app-content">
                    <div className="text">{app.text}</div>
                  </div>
                </Link>
              </div>
            ))}
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
