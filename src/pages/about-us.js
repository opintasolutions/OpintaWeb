import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageCover from "../components/pageCover"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import coverImg from "../images/about/cover.jpg"
import teamData from "../data/teamData"

const tileImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
}

const SecondPage = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="About" />
    <section className="page">
      <PageCover
        img=""
        h1="About Us"
        breadCrumbs={[
          {
            text: "Home",
            link: "/",
            active: false,
          },
          {
            text: "About Us",
            link: "/about-us",
            active: true,
          },
        ]}
      />
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about">
                <div className="about-image">
                  <Img
                    fluid={data.overview.childImageSharp.fluid}
                    style={tileImgStyle}
                    alt=""
                  />
                </div>
                <div className="about-text">
                  <h2>Overview</h2>
                  <p>
                    According to Forbes survey the use of internet appropriately
                    will boom up in coming years. Compelling each and every
                    offline business to make its’ stand digitally. Opinta
                    Solutions arrives as a ray of hope to boom their business
                    globally.
                  </p>
                  <p />
                </div>
              </div>
              <div className="about left mbottom-30">
                <div className="about-image">
                  <Img
                    fluid={data.mission.childImageSharp.fluid}
                    style={tileImgStyle}
                    alt=""
                  />
                </div>
                <div className="about-text">
                  <h2>Mission</h2>
                  <p>
                    To aware businesses about the need to have an online
                    presence, create ideas into online businesses while ensuring
                    exceptional customer support throughout the process.
                  </p>
                  <p />
                </div>
              </div>
              <div className="about">
                <div className="about-image">
                  <Img
                    fluid={data.vision.childImageSharp.fluid}
                    style={tileImgStyle}
                    alt=""
                  />
                </div>
                <div className="about-text">
                  <h2>Vision</h2>
                  <p>
                    To become a prime performer in the global marketplace by
                    providing highly innovative web development, mobile
                    development and digital marketing.
                  </p>
                  <p />
                </div>
              </div>
              <div className="about left mbottom-30">
                <div className="about-image">
                  <Img
                    fluid={data.services.childImageSharp.fluid}
                    style={tileImgStyle}
                    alt=""
                  />
                </div>
                <div className="about-text">
                  <h2>Services</h2>
                  <p>
                    Opinta Solutions is a Start-up company mainly designed and
                    started for the Digital Marketing, Custom Software
                    Development, Web Development and Mobile App development for
                    proper digitalization.{" "}
                  </p>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="parallax">
      <div className="parallax-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="info">
                <br />
                <b>
                  “If your business is not on the internet, then your business
                  will be out of business”
                </b>
                <p>
                  -<em>Bill Gates</em>
                </p>
                <Link
                  className="btn-white-line"
                  style={{ marginBottom: "30px" }}
                  to="/contact"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section pbottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                A group of hard working individuals commited to deliver the best
                product and services on demand.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamData.map(member => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team-item">
                <div className="header">
                  {/* <div className="img">*/}
                  <div className="image-wrapper">
                    <div className={`image-about ${member.img}`} />
                  </div>
                  <div className="info text-center">
                    <strong>{member.name}</strong>
                    <span>{member.title}</span>
                  </div>
                </div>
                {
                  // <div className="body">
                  //   Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                  //   justo. Sed at lorem malesuada.
                  // </div>
                }
                <ul className="social">
                  <li>
                    <a
                      href={`https://www.linkedin.com/in/${member.username}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "about/cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 777) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mission: file(relativePath: { eq: "about/mission.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 777) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vision: file(relativePath: { eq: "about/vision.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 777) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    overview: file(relativePath: { eq: "about/overview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 777) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    services: file(relativePath: { eq: "about/services.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 777) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
