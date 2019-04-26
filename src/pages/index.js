import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
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
      <div className="welcome-bg" data-bg="assets/images/photos/welcome.jpg" />
      <div className="welcome-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-sm-12">
              <h1>Check out our mobile apps we're working on.</h1>
              <p>
                We design and develop mobile apps that delight your users and
                grow your business. Enterprise-grade development combined with
                outstanding design.
              </p>
              <Link className="btn-white-line" to="#">
                ALL WORKS
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
                  <img
                    src="assets/images/icons/apps/1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="blue-app-single.html" className="app-item">
                <div className="icon">
                  <img
                    src="assets/images/icons/apps/8.png"
                    className="img-fluid"
                    alt=""
                  />
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
              <h2 className="section-title">
                Start-to-end app development agency
              </h2>
            </div>
            <div className="left-text">
              <p className="dark">
                Pellentesque posuere vestibulum lorem, ut efficitur erat
                tristique sed. Ut vitae tincidunt ante.{" "}
              </p>
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus volutpat. Praesent tortor
                nulla, ullamcorper.
              </p>
            </div>
            <Link to="#" className="btn-primary-line">
              SERVICES
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
                  <h5 className="services-title">Mobility Services Strategy</h5>
                  <p>
                    Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                    mattis.
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
                    Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                    at justo.
                  </p>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Link
                  to="blue-services-single.html"
                  className="home-services-item active"
                  data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                >
                  <i className="fa fa-object-ungroup" />
                  <h5 className="services-title">Design & User Experience</h5>
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
                  <h5 className="services-title">Maintenance & Monitoring</h5>
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
            <img
              src="assets/images/mockup/home-mockup.png"
              className="img-fluid d-block mx-auto"
              alt=""
            />
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
                    Design and UX that ensures your app will be loved and used
                  </h5>
                  <p>
                    Quisque nec consectetur arcu. Duis tellus ante, sodales sed
                    molestie at, sagittis id neque. Quisque condimentum libero
                    arcu. Mauris tellus sem, ultrices varius nisl at.
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
                    Enterprise-grade development secures reliability and quality
                  </h5>
                  <p>
                    Praesent tortor nulla, ullamcorper vel ante at, varius
                    tincidunt augue. Cras vitae consectetur arcu. Proin at velit
                    vel risus elementum accumsan sed non neque. Aenean risus.
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
                    Aliquam bibendum velit ut ante cursus, et efficitur lectus
                    rutrum. Maecenas ac convallis lorem, non ultricies sem. Duis
                    elit metus, ullamcorper sed ante sed, viverra bibendum
                    neque.
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
                  <h5 className="title">Start-to-end app development agency</h5>
                  <p>
                    Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                    Interdum et malesuada fames ac ante ipsum primis in
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
                  <img src="assets/images/photos/team/1.jpg" alt="" />
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
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item active">
              <div className="header">
                <div className="img">
                  <img src="assets/images/photos/team/2.jpg" alt="" />
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
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src="assets/images/photos/team/3.jpg" alt="" />
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
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src="assets/images/photos/team/4.jpg" alt="" />
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
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem.
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
                <img src="assets/images/photos/blog/1.jpg" alt="" />
              </div>
              <div className="post-content">
                <div className="date">APR 09</div>
                <h3>
                  <Link to="blue-blog-single.html">
                    5 steps to becoming GDPR compliant on mobile apps
                  </Link>
                </h3>
                <div className="text">
                  Mauris tellus sem, ultrices varius nisl at, convallis iaculis
                  mauris. Sed eget sem vitae purus tempus dignissim.
                </div>
                <Link to="blue-blog-single.html" className="btn-primary-line">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src="assets/images/photos/blog/2.jpg" alt="" />
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
                <Link to="blue-blog-single.html" className="btn-primary-line">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src="assets/images/photos/blog/3.jpg" alt="" />
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
                <Link to="blue-blog-single.html" className="btn-primary-line">
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

export default IndexPage
