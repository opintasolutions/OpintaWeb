import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import coverImg from "../images/about/cover.jpg"
import PranavBhaskar from "../assets/images/photos/about/Pranav Bhaskar.jpg"
import RajnishKumar from "../assets/images/photos/about/Rajnish Kumar.jpg"
import SupriyaPatil from "../assets/images/photos/about/Supriya Patil.jpg"
import img2 from "../assets/images/photos/team/1.jpg"

// import about_overview from "../images/about_overview.jpg"
// import about_mission from "../images/about_mission.jpg"
// import about_vision from "../images/about_vision.jpeg"
// import about_services from "../images/about_services.jpg"

const SecondPage = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="About" />
    {/* 
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> /*/}
    <section className="page">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${coverImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>About Us</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">About Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about">
                <div className="about-image">
                  <Img
                    fluid={data.overview.childImageSharp.fluid}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
                Fusce placerat pretium mauris, vel sollicitudin elit lacinia
                vitae. Quisque sit amet nisi erat.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src={RajnishKumar} alt="" />
                </div>
                <div className="info">
                  <strong>Rajnish Kumar</strong>
                  <span>Founder, CEO</span>
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
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-github" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src={PranavBhaskar} alt="" />
                </div>
                <div className="info">
                  <strong>Pranav Bhaskar</strong>
                  <span>Head Developer, CTO</span>
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
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-github" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src={SupriyaPatil} alt="" />
                </div>
                <div className="info">
                  <strong>Supriya Patil</strong>
                  <span>Android Developer</span>
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
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-github" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src={img2} alt="" />
                </div>
                <div className="info">
                  <strong>Tushar Palei</strong>
                  <span>Graphic Designer</span>
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
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-github" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
