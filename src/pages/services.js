import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PageCover from "../components/pageCover"
import Layout from "../components/layout"
import SEO from "../components/seo"
import servicesData from "../data/servicesData"

const ServicePage = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Services" />
    <section className="page">
      <PageCover
        img=""
        h1="Services"
        breadCrumbs={[
          {
            text: "Home",
            link: "/",
            active: false,
          },
          {
            text: "Services",
            link: "/services",
            active: true,
          },
        ]}
      />
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            {servicesData.map(service => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a href="/services/#" className="services-post">
                  <div className="img">
                    <Img
                      fluid={data[service.slug].childImageSharp.fluid}
                      alt=""
                    />
                  </div>
                  <div className="post-content">
                    <div className="icon">
                      <i className="fa fa-chevron-right" />
                    </div>
                    <h3>{service.title}</h3>
                    <div className="text">
                      {service.phrase}
                      <ul>
                        {service.bullets.map(point => (
                          <li> &#9679; {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ServicePage

export const pageQuery = graphql`
  query {
    webdevelopment: file(
      relativePath: { eq: "services/web_development_opinta.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    softwaredevelopment: file(
      relativePath: { eq: "services/software_development_opinta.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appdevelopment: file(
      relativePath: { eq: "services/app_development_opinta.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bulkmessages: file(relativePath: { eq: "services/Bulk-Messages.png" }) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    digitalmarketing: file(
      relativePath: { eq: "services/Digital_Marketing_Opinta.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ivr: file(relativePath: { eq: "services/IVR.png" }) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
