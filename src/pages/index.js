import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import {
  CarouselProvider,
  Slider,
  Slide,
  // ButtonBack,
  // ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import { Fade } from "react-reveal"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalVideo from "react-modal-video"

import "../style.css"
import "react-modal-video/css/modal-video.min.css"

// import bgImg from "../assets/images/photos/bgImg.png"
import bgVid from "../assets/vidBG.mp4"

import img11 from "../assets/images/icons/apps/1.jpg"
import img12 from "../assets/images/icons/apps/Trawis Connect.png"
import img13 from "../assets/images/icons/apps/3.jpg"
import img14 from "../assets/images/icons/apps/4.jpg"
import img15 from "../assets/images/icons/apps/5.png"
import img16 from "../assets/images/icons/apps/6.png"

import img2 from "../assets/images/photos/Opinta-Video.png"
import img3 from "../assets/images/photos/team/1.jpg"
import anshu from "../assets/images/photos/AnshuShrivastav.jpeg"
import apoorva from "../assets/images/photos/ApoorvaPalkar.jpeg"

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
    this.openModal = this.openModal.bind(this)
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
  openModal() {
    this.setState({ modalIsOpen: true })
  }
  render() {
    let testimonials = [
      <div className="team-item testimonial">
        <div className="header text-center mt-10">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginTop: "16px", borderRadius: "8px" }}
              src={img3}
              alt=""
            />
          </div>
          <div className="info">
            <strong>Anil Pandey</strong>
            <span>Jankari Junctions</span>
          </div>
        </div>
        <div className="body">
          <i className="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.
          </p>
        </div>
      </div>,
      <div className="team-item testimonial">
        <div className="header text-center mt-10">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginTop: "16px", borderRadius: "8px" }}
              src={img3}
              alt=""
            />
          </div>
          <div className="info">
            <strong>Raju Singh</strong>
            <span>Patanjali Dealer</span>
          </div>
        </div>
        <div className="body">
          <i className="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
      <div className="team-item testimonial">
        <div className="header text-center mt-10">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginTop: "16px", borderRadius: "8px" }}
              src={img3}
              alt=""
            />
          </div>
          <div className="info">
            <strong>Kiran Soni</strong>
            <span>KNS Restaurants</span>
          </div>
        </div>
        <div className="body">
          <i className="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
      <div className="team-item testimonial">
        <div className="header text-center mt-10">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginTop: "16px", borderRadius: "8px" }}
              src={img3}
              alt=""
            />
          </div>
          <div className="info">
            <strong>Sunil Kumar</strong>
            <span>Prayatna Eduventures</span>
          </div>
        </div>
        <div className="body">
          <i className="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
    ]
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
                  <Link to="#" className="app-item">
                    <div className="icon allign-center">
                      <img src={img11} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="#" className="app-item">
                    <div className="icon allign-center">
                      <img src={img12} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="#" className="app-item">
                    <div className="icon allign-center">
                      <img src={img13} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="#" className="app-item">
                    <div className="icon allign-center">
                      <img src={img14} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="#" className="app-item">
                    <div className="icon allign-center">
                      <img src={img15} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="#" className="app-item">
                    <div className="icon allign-center">
                      <img src={img16} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
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
                          className="fa fa-object-ungroup"
                          style={{ fontSize: "35px" }}
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
                          style={{ fontSize: "35px" }}
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
                          style={{ fontSize: "35px" }}
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
                          className="fa fa-line-chart"
                          style={{ fontSize: "35px" }}
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
                <div onClick={this.openModal}>
                  <span>
                    <i className="fa fa-play-circle play-button" />
                  </span>
                </div>
                <img
                  src={img2}
                  className="video-thumbnail img-fluid d-block mx-auto"
                  alt=""
                />
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.modalIsOpen}
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
                            width: "200px",
                            height: "200px",
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
                            backgroundImage: `url(${anshu})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "200px",
                            height: "200px",
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
                        <strong>Anshu Shrivastav</strong>
                        <span>Mentor</span>
                      </div>
                    </div>
                    <ul className="social">
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/anshus"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                    <div className="body">
                      Mentor and Founder with a history of accelerating revenue
                      acquisition for start-ups and planning growth strategies
                      for companies.
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
            <CarouselProvider totalSlides={4} interval={2500} isPlaying>
              <Slider>
                {testimonials.map((testi, i) => (
                  <Slide index={i} style={{ height: "370px" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="item"
                        style={{
                          maxWidth: "900px",
                          margin: "0 auto",
                        }}
                      >
                        {testi}
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
              {/*<div className="carousel-button-wrapper">
                <ButtonBack>‹</ButtonBack>
                <ButtonNext>›</ButtonNext>
              </div>*/}
            </CarouselProvider>
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
                    <a target="_blank" href="https://learntogrow.in">
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
                      <img src={node.featured_media.localFile.url} alt="" />
                    </div>
                    <div className="post-content">
                      <div className="date">
                        {new Date(node.date).toDateString().slice(4)}
                      </div>
                      <h3>
                        <Link to={`/post/${node.slug}`}>{node.title}</Link>
                      </h3>
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
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
  }
`
