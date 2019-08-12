import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-reveal"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import appsData from "../data/appsData"
import SEO from "../components/seo"
import ModalVideo from "react-modal-video"
import bgVid from "../assets/vidBG.mp4"
import deepak from "../assets/images/photos/Deepak_Hardikar.webp"
import apoorva from "../assets/images/photos/ApoorvaPalkar.webp"
import "../style.css"
import "react-modal-video/css/modal-video.min.css"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerClass: "header-area",
      modalIsOpen: false,
      width: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.updateWindowWidth = this.updateWindowWidth.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.updateWindowWidth)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll = ev => {
    if (window.pageYOffset >= 30 && this.state.headerClass === "header-area") {
      this.setState({ headerClass: "header-area header-white" })
    } else if (
      window.pageYOffset < 30 &&
      this.state.headerClass === "header-area header-white"
    ) {
      this.setState({ headerClass: "header-area" })
    }
  }
  updateWindowWidth = ev => {
    this.setState({ width: window.innerWidth })
  }
  render() {
    let data = this.props.data.allWordpressPost.edges
    let latestBlogs = data.slice(data.length - 3)
    console.log(latestBlogs)
    return (
      <Layout headerClass={this.state.headerClass}>
        <SEO title="Home" />
        <section className="welcome-area">
          <div className="welcome-bg">
            <video id="background-video" autoPlay loop muted>
              <source src={bgVid} type="video/mp4" />
            </video>
          </div>
          <div className="welcome-content">
            <div className="container">
              <div className="row">
                <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-sm-12">
                  <h1>Make Digital Presence of Your Business</h1>
                  <p>
                    Everything we do, every recommendation we make, is based on
                    research and experience in each of our clients industries
                    and projects.
                  </p>
                  <Link className="btn-white-line" to="/contact">
                    CONTACT NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="welcome-apps">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="apps">
                  {appsData.map(app => (
                    <a href="#" className="app-item">
                      <div className="icon allign-center">
                        <Img
                          fluid={
                            this.props.data[app.slug].childImageSharp.fluid
                          }
                          className="img-fluid img-apps"
                          alt=""
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section services-section pbottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                <div className="left-heading">
                  <h2 className="section-title">IT Support and Services</h2>
                </div>
                <div className="left-text">
                  <p className="dark">
                    Opinta Solutions provide the services that refer to the
                    application of business and technical expertise to enable
                    organisation in the creation, management and the
                    optimization of or accesss to information and business
                    processes.
                  </p>
                </div>
                <Link to="/services" className="btn-primary-line">
                  Services
                </Link>
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Fade bottom>
                      <Link
                        to="/services"
                        className="home-services-item"
                        data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fa fa-desktop"
                          style={{ fontSize: "38px" }}
                        />
                        <h5 className="services-title">
                          Web Design &<br /> Development
                        </h5>
                        <p>
                          {
                            // We make websites and web applications that are most
                            // open, flexible and immediately accesible.
                          }
                        </p>
                      </Link>
                    </Fade>
                    <Fade bottom>
                      <Link
                        to="/services"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        className="home-services-item"
                        data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s"
                      >
                        <i
                          className="fa fa-connectdevelop"
                          style={{ fontSize: "38px" }}
                        />
                        <h5 className="services-title">
                          UI/UX Design <br />& Development
                        </h5>
                        <p>
                          {
                            // We create native custom softwares that fit the needs
                            // of your business and tools to help it grow.
                          }
                        </p>
                      </Link>
                    </Fade>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Fade bottom>
                      <Link
                        to="/services"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        className="home-services-item"
                        data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                      >
                        <i
                          className="fa fa-clone"
                          style={{ fontSize: "38px" }}
                        />
                        <h5 className="services-title">
                          Mobile App
                          <br /> Development
                        </h5>
                        <p>
                          {
                            // Our teams rapidly deploy customized mobile apps for
                            // each client and every platform.
                          }
                        </p>
                      </Link>
                    </Fade>
                    <Fade bottom>
                      <Link
                        to="/services"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        className="home-services-item"
                        data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                      >
                        <i
                          className="fa fa-bullhorn"
                          style={{ fontSize: "38px" }}
                        />
                        <h5 className="services-title">
                          Digital & Social <br /> Media Marketing
                        </h5>
                        <p>
                          {
                            // Our experts spread your words across all media outlets
                            // and increase your consumer base.
                          }
                        </p>
                      </Link>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section background">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center mobile-bottom-fix">
                <i
                  onClick={() => this.setState({ modalIsOpen: true })}
                  className="fa fa-play-circle play-button"
                  style={{ fontSize: "135px" }}
                />
                <Img
                  fluid={this.props.data.opintavideo.childImageSharp.fluid}
                  className="video-thumbnail img-fluid d-block mx-auto"
                  alt=""
                />
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.modalIsOpen}
                  autoplay={1}
                  videoId="fvfuamxXOSg"
                  onClose={() => this.setState({ modalIsOpen: false })}
                />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 align-self-center">
                <div
                  className="center-heading"
                  style={{ marginBottom: "50px" }}
                >
                  <h2 className="section-title">We Promise You</h2>
                </div>
                <ul className="features">
                  <Fade bottom>
                    <li>
                      <div className="count">
                        <span>
                          <i className="fa fa-bookmark-o" />
                        </span>
                      </div>
                      <div className="text">
                        <h5 className="title">Quality Standards</h5>
                        <p>
                          At Opinta we give more emphasis to the quality of
                          every product with the idea to be remembered for
                          quality.
                        </p>
                      </div>
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <div className="count">
                        <span>
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                      <div className="text">
                        <h5 className="title">Timely Completion</h5>
                        <p>
                          We believe deliverence is the key to successful
                          business relation. We stand for quality products
                          delivered on time.
                        </p>
                      </div>
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <div className="count">
                        <span>
                          <i className="fa fa-heart-o" />
                        </span>
                      </div>
                      <div className="text">
                        <h5 className="title">Trusted Resources</h5>
                        <p>
                          We use an array of most reliable resources for making
                          robust applications that approve of our quality and
                          standards.
                        </p>
                      </div>
                    </li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section pbottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Our Mentors</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>
                    Opinta Solutions is very grateful to have these mentors who
                    guide us through the nuances of business and IT management.
                  </p>
                </div>
              </div>
            </div>
            <Fade bottom>
              <div className="row">
                <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12">
                  <div className="team-item" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="team-item">
                    <div className="header">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${apoorva})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "180px",
                            height: "180px",
                            overflow: "hidden",
                            borderRadius: "50%",
                            margin: "1.2rem",
                          }}
                        />
                      </div>
                      <div
                        className="info"
                        style={{ margin: "0", textAlign: "center" }}
                      >
                        <strong>Apoorva Palkar</strong>
                        <span>Director, CIIL</span>
                      </div>
                    </div>
                    <ul className="social">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/apoorvapalkar"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                    <div className="body">
                      Director, Innovation,Incubation Linkages Savitribai Phule
                      Pune University ( Formerly Pune University )
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                  <div className="team-item" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="team-item">
                    <div className="header">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${deepak})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "180px",
                            height: "180px",
                            overflow: "hidden",
                            borderRadius: "50%",
                            margin: "1.2rem",
                          }}
                        />
                      </div>
                      <div
                        className="info"
                        style={{ margin: "0", textAlign: "center" }}
                      >
                        <strong>Deepak Hardikar</strong>
                        <span>Mentor</span>
                      </div>
                    </div>
                    <ul className="social">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/deepak.hardikar.7"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                    <div className="body">
                      Mentor with a history of accelerating revenue acquisition
                      for start-ups and planning growth strategies for
                      companies.
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12">
                  <div className="team-item" />
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section className="section pbottom-70 background">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Testimonials</h2>
                </div>
              </div>
            </div>
            <Testimonials />
          </div>
        </section>
        <section className="section pbottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Latest Blog Posts</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>
                    Blogs at Opinta are powered by partners in "tech blogging".{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://learntogrow.in"
                    >
                      learntogrow.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog preview begins */}

            <div className="row">
              {latestBlogs.map(({ node }) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post-thumb">
                    <div className="img">
                      <div
                        style={{
                          backgroundImage: node.featured_media.localFile.url
                            ? `url(${node.featured_media.localFile.url})`
                            : "",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      />
                      {
                        // <img
                        // src={node.featured_media.localFile.url}
                        // alt="" />
                      }
                    </div>
                    <div className="post-content">
                      <div className="date">
                        {new Date(node.date).toDateString().slice(4)}
                      </div>
                      <h3>
                        <Link to={`/post/${node.slug}`}>
                          <span
                            dangerouslySetInnerHTML={{ __html: node.title }}
                          />
                        </Link>
                      </h3>
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: node.excerpt
                            .split(" ")
                            .slice(0, 20)
                            .join(" "),
                        }}
                      />
                      <Link
                        to={`/post/${node.slug}`}
                        className="btn-primary-line"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* Blog Preview ends */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          date
          excerpt
          slug
          featured_media {
            localFile {
              url
            }
          }
        }
      }
    }
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
    opintavideo: file(relativePath: { eq: "Opinta-Video.png" }) {
      childImageSharp {
        fluid(maxWidth: 445, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
