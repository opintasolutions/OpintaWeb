import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../assets/images/icons/apps/1.png"
import img2 from "../assets/images/mockup/home-mockup.png"
import img3 from "../assets/images/photos/team/1.jpg"
import img4 from "../assets/images/photos/blog/1.jpg"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerClass: "header-area",
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentDidUnmount() {
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
  render() {
    return (
      <Layout headerClass={this.state.headerClass}>
        {
          //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          // <h1>Hi people</h1>
          // <p>Welcome to your new Gatsby site.</p>
          // <button classNameNameName="btn btn-success">Hello</button>
          // <p>Now go build something great.</p>
          // <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          //   <Image />
          // </div>
          //     <Link to="/page-2/">Go to page 2</Link>
        }
        <section className="welcome-area">
          <div className="welcome-bg" />
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
                    Contact Us Today
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
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
                    </div>
                  </Link>
                  <Link to="blue-app-single.html" className="app-item">
                    <div className="icon">
                      <img src={img1} className="img-fluid" alt="" />
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
                      <i className="fa fa-clone" />
                      <h5 className="services-title">
                        Mobility Services Strategy
                      </h5>
                      <p>
                        Morbi pharetra sapien ut mattis viverra. Curabitur sit
                        amet mattis.
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
                        Proin arcu ligula, malesuada id tincidunt laoreet,
                        facilisis at justo.
                      </p>
                    </Link>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Link
                      to="blue-services-single.html"
                      className="home-services-item"
                      data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                    >
                      <i className="fa fa-object-ungroup" />
                      <h5 className="services-title">
                        Design & User Experience
                      </h5>
                      <p>
                        Donec pellentesque turpis utium lorem imperdiet semper
                        viverra.
                      </p>
                    </Link>
                    <Link
                      to="blue-services-single.html"
                      className="home-services-item"
                      data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                    >
                      <i className="fa fa-line-chart" />
                      <h5 className="services-title">
                        Maintenance & Monitoring
                      </h5>
                      <p>
                        Facilisis arcu ligula, malesuada id tincidunt laoreet,
                        facilisis at justo.
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
                <img src={img2} className="img-fluid d-block mx-auto" alt="" />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 align-self-center">
                <ul className="features">
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s">
                    <div className="count">
                      <span>
                        <i className="fa fa-flash" />
                      </span>
                    </div>
                    <div className="text">
                      <h5 className="title">
                        Design and UX that ensures your app will be loved and
                        used
                      </h5>
                      <p>
                        Quisque nec consectetur arcu. Duis tellus ante, sodales
                        sed molestie at, sagittis id neque. Quisque condimentum
                        libero arcu. Mauris tellus sem, ultrices varius nisl at.
                      </p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s">
                    <div className="count">
                      <span>
                        <i className="fa fa-code-fork" />
                      </span>
                    </div>
                    <div className="text">
                      <h5 className="title">
                        Enterprise-grade development secures reliability and
                        quality
                      </h5>
                      <p>
                        Praesent tortor nulla, ullamcorper vel ante at, varius
                        tincidunt augue. Cras vitae consectetur arcu. Proin at
                        velit vel risus elementum accumsan sed non neque. Aenean
                        risus.
                      </p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                    <div className="count">
                      <span>
                        <i className="fa fa-link" />
                      </span>
                    </div>
                    <div className="text">
                      <h5 className="title">
                        A proven and tested process guarantees your success
                      </h5>
                      <p>
                        Aliquam bibendum velit ut ante cursus, et efficitur
                        lectus rutrum. Maecenas ac convallis lorem, non
                        ultricies sem. Duis elit metus, ullamcorper sed ante
                        sed, viverra bibendum neque.
                      </p>
                    </div>
                  </li>
                  <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.5s">
                    <div className="count">
                      <span>
                        <i className="fa fa-code" />
                      </span>
                    </div>
                    <div className="text">
                      <h5 className="title">
                        Start-to-end app development agency
                      </h5>
                      <p>
                        Cras imperdiet faucibus sem, a dignissim urna feugiat
                        sed. Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Pellentesque posuere vestibulum lorem.
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
                      <img src={img3} alt="" />
                    </div>
                    <div className="info">
                      <strong>Fletch Skinner</strong>
                      <span>Product Strategist</span>
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
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="team-item">
                  <div className="header">
                    <div className="img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="info">
                      <strong>Giles Posture</strong>
                      <span>iOS Developer</span>
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
            </div>
          </div>
        </section>
        <section className="parallax">
          <div className="parallax-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item">
                    <strong>126</strong>
                    <span>
                      Mobile App
                      <br />
                      Complate
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item">
                    <strong>98</strong>
                    <span>
                      Happy
                      <br />
                      Customer
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item">
                    <strong>176</strong>
                    <span>
                      App
                      <br />
                      Version
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item">
                    <strong>16</strong>
                    <span>
                      Award
                      <br />
                      Win
                    </span>
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
