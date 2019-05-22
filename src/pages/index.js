import React, { Component } from "react"
import { Link } from "gatsby"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalVideo from "react-modal-video"

import "../style.css"
import "react-modal-video/css/modal-video.min.css"

import bgImg from "../assets/images/photos/bgImg.png"
import bgVid from "../assets/vidBG.mp4"

import img11 from "../assets/images/icons/apps/1.jpg"
import img12 from "../assets/images/icons/apps/2.png"
import img13 from "../assets/images/icons/apps/3.jpg"
import img14 from "../assets/images/icons/apps/4.jpg"
import img15 from "../assets/images/icons/apps/5.png"
import img16 from "../assets/images/icons/apps/6.png"

import img2 from "../assets/images/photos/Opinta-Video.png"
import img3 from "../assets/images/photos/team/1.jpg"
import img4 from "../assets/images/photos/blog/1.jpg"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerClass: "header-area",
      modalIsOpen: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.openModal = this.openModal.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
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
  openModal() {
    this.setState({ modalIsOpen: true })
  }
  render() {
    let testimonials = [
      <div class="team-item testimonial">
        <div class="header text-center mt-10">
          <div class="info">
            <strong>Anil Pandey</strong>
            <span>Jankari Junctions</span>
          </div>
        </div>
        <div class="body">
          <i class="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
      <div class="team-item testimonial">
        <div class="header text-center mt-10">
          <div class="info">
            <strong>Raju Singh</strong>
            <span>Patanjali Dealer</span>
          </div>
        </div>
        <div class="body">
          <i class="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
      <div class="team-item testimonial">
        <div class="header text-center mt-10">
          <div class="info">
            <strong>Kiran Soni</strong>
            <span>KNS Restaurants</span>
          </div>
        </div>
        <div class="body">
          <i class="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
      <div class="team-item testimonial">
        <div class="header text-center mt-10">
          <div class="info">
            <strong>Sunil Kumar</strong>
            <span>Prayatna Eduventures</span>
          </div>
        </div>
        <div class="body">
          <i class="fa fa-quote-left" />
          <p>
            Thanks for the fantastic job on our site www.jankarijunction.com it
            was pleasure working with Opinta Solutions as they worked closely
            with us every step of the way, and we valued their creative input
            that exceeded our expectations.{" "}
          </p>
        </div>
      </div>,
    ]
    return (
      <Layout headerClass={this.state.headerClass}>
        <SEO title="Home" />
        <section className="welcome-area">
          <div className="welcome-bg">
            <video id="background-video" poster={bgImg} autoPlay loop muted>
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
                    and on their projects.
                  </p>
                  <Link className="btn-white-line" to="#">
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
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon allign-center">
                      <img src={img11} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon allign-center">
                      <img src={img12} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon allign-center">
                      <img src={img13} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon allign-center">
                      <img src={img14} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon allign-center">
                      <img src={img15} className="img-fluid img-apps" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
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
                <Link to="#" className="btn-primary-line">
                  Services
                </Link>
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Link
                      to="blue-services-single.html"
                      className="home-services-item"
                      data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s"
                    >
                      <i className="fa fa-object-ungroup" />
                      <h5 className="services-title">
                        Web Design & Development
                      </h5>
                      <p>
                        We make websites and web applications that are most
                        open, flexible and immediately accesible.
                      </p>
                    </Link>
                    <Link
                      to="blue-services-single.html"
                      className="home-services-item"
                      data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s"
                    >
                      <i className="fa fa-connectdevelop" />
                      <h5 className="services-title">Native App Development</h5>
                      <p>
                        We create native custom softwares that fit the needs of
                        your business and tools to help it grow.
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Link
                      to="blue-services-single.html"
                      className="home-services-item"
                      data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                    >
                      <i className="fa fa-clone" />
                      <h5 className="services-title">Mobile App Development</h5>
                      <p>
                        Our teams rapidly deploy customized mobile apps for each
                        client and every platform.
                      </p>
                    </Link>
                    <Link
                      to="blue-services-single.html"
                      className="home-services-item"
                      data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                    >
                      <i className="fa fa-line-chart" />
                      <h5 className="services-title">
                        Digital & Social <br /> Media Marketing
                      </h5>
                      <p>
                        Our experts spread your words across all media outlets
                        and increase your consumer base.
                      </p>
                    </Link>
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
                <ul className="features">
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s">
                    <div className="count">
                      <span>
                        <i className="fa fa-bookmark-o" />
                      </span>
                    </div>
                    <div className="text">
                      <h5 className="title">Quality Standards</h5>
                      <p>
                        At Opinta we give more emphasis to the quality of every
                        product with the idea to be remembered for quality.
                      </p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s">
                    <div className="count">
                      <span>
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                    <div className="text">
                      <h5 className="title">Timely Completion</h5>
                      <p>
                        We believe deliverence is the key to successful business
                        relation. We stand for quality products delivered on
                        time.
                      </p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
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
                    Fusce placerat pretium mauris, vel sollicitudin elit lacinia
                    vitae. Quisque sit amet nisi erat.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12">
                <div className="team-item" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="team-item">
                  <div className="header">
                    <div className="img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="info">
                      <strong>Lance Bogrol</strong>
                      <span>Visual Designer</span>
                    </div>
                  </div>
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
                  <div className="body">
                    Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                    at justo. Sed at lorem.
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                <div className="team-item" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="team-item">
                  <div className="header">
                    <div className="img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="info">
                      <strong>Valent Morose</strong>
                      <span>Android Developer</span>
                    </div>
                  </div>
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
                  <div className="body">
                    Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                    at justo. Sed at lorem.
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12">
                <div className="team-item" />
              </div>
            </div>
          </div>
        </section>
        <section class="section pbottom-70 background">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="center-heading">
                  <h2 class="section-title">What people say..</h2>
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
                        class="item"
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
                    Fusce placerat pretium mauris, vel sollicitudin elit lacinia
                    vitae. Quisque sit amet nisi erat.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img src={img4} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="date">APR 09</div>
                    <h3>
                      <Link to="blue-blog-single.html">
                        5 steps to becoming GDPR compliant on mobile apps
                      </Link>
                    </h3>
                    <div className="text">
                      Mauris tellus sem, ultrices varius nisl at, convallis
                      iaculis mauris. Sed eget sem vitae purus tempus dignissim.
                    </div>
                    <Link
                      to="blue-blog-single.html"
                      className="btn-primary-line"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img src={img4} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="date">APR 09</div>
                    <h3>
                      <Link to="blue-blog-single.html">
                        Measuring app success through mobile analytics
                      </Link>
                    </h3>
                    <div className="text">
                      Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                      Interdum et malesuada fames ac ante ipsum primis.
                    </div>
                    <Link
                      to="blue-blog-single.html"
                      className="btn-primary-line"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img src={img4} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="date">APR 09</div>
                    <h3>
                      <Link to="blue-blog-single.html">
                        How accessibility will influence your app dev
                      </Link>
                    </h3>
                    <div className="text">
                      Quisque euismod nec lacus sit amet maximus. Ut convallis
                      sagittis lorem auctor malesuada. Morbi auctor.
                    </div>
                    <Link
                      to="blue-blog-single.html"
                      className="btn-primary-line"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
