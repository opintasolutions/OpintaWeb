import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Services" />
    <section className="page">
      <div className="cover" data-image="assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Services</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">Services</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="/service-web-development" className="services-post">
                <div className="img">
                  <Img
                    fluid={data.webdevelopment.childImageSharp.fluid}
                    alt=""
                  />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Web Development</h3>
                  <div className="text">
                    Get Your Business Recognized Globally
                    <ul>
                      <li> &#9679; Create an online store/portfolio</li>
                      <li> &#9679; Communicate your services</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link
                to="/service-software-development"
                className="services-post"
              >
                <div className="img">
                  <Img
                    fluid={data.softwaredevelopment.childImageSharp.fluid}
                    alt=""
                  />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Software Development</h3>
                  <div className="text">
                    A customized solution for any platform
                    <ul>
                      <li> &#9679; A desktop application for specific needs</li>
                      <li> &#9679; On demand automation solutions</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="/service-app-development" className="services-post">
                <div className="img">
                  <Img
                    fluid={data.appdevelopment.childImageSharp.fluid}
                    alt=""
                  />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>App Development</h3>
                  <div className="text">
                    Enjoy Mobile Freindly Web Pages
                    <ul>
                      <li> &#9679; Develop compatible websites</li>
                      <li> &#9679; Innovate your brand</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="/service-bulk-messages" className="services-post">
                <div className="img">
                  <Img fluid={data.bulkmessages.childImageSharp.fluid} alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Bulk Messages</h3>
                  <div className="text">
                    Get Efficient In Time With Bulk Sms
                    <ul>
                      <li> &#9679; Share your message within seconds</li>
                      <li> &#9679; Track the metrics</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="/service-digital-marketing" className="services-post">
                <div className="img">
                  <Img
                    fluid={data.digitalmarketing.childImageSharp.fluid}
                    alt=""
                  />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Digital Marketing</h3>
                  <div className="text">
                    Rank Your Business At The Top
                    <ul>
                      <li> &#9679; Content Marketing</li>
                      <li> &#9679; Search Engine Optimization</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="/service-ivr" className="services-post">
                <div className="img">
                  <Img fluid={data.ivr.childImageSharp.fluid} alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>IVR (Toll-Free)</h3>
                  <div className="text">
                    Discover The Modern IVR{" "}
                    <ul>
                      <li> &#9679; Connect Faster Anywhere</li>
                      <li> &#9679; Connect Professionaly</li>
                    </ul>
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
