import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    {/*    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> /*/}
    <section className="page">
      <div className="cover" data-image="assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>About Us</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="blue-index.html">Home</Link>
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
                  <img src="assets/images/photos/about/1.jpg" alt="" />
                </div>
                <div className="about-text">
                  <h2>We're makers and creative</h2>
                  <p>
                    Praesent posuere nec nisl quis hendrerit. Duis sit amet
                    rutrum lorem. Ut maximus orci in metus blandit, et placerat
                    dolor congue.
                  </p>
                  <p>
                    Proin tempor ligula nec dolor facilisis mattis. Suspendisse
                    potenti. Suspendisse efficitur turpis quis risus molestie
                    cursus. Cras malesuada a massa et aliquet. Nunc vel urna eu
                    neque consectetur imperdiet. Sed pretium neque ligula, ac
                    vehicula massa aliquet eu.
                  </p>
                </div>
              </div>
              <div className="about left mbottom-30">
                <div className="about-image">
                  <img src="assets/images/photos/about/2.jpg" alt="" />
                </div>
                <div className="about-text">
                  <h2>Our ideas are beyond their limits.</h2>
                  <p>
                    Praesent posuere nec nisl quis hendrerit. Duis sit amet
                    rutrum lorem. Ut maximus orci in metus blandit, et placerat
                    dolor congue.
                  </p>
                  <p>
                    Proin tempor ligula nec dolor facilisis mattis. Suspendisse
                    potenti. Suspendisse efficitur turpis quis risus molestie
                    cursus.
                  </p>
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
                <p>
                  We design and develop <span>mobile apps</span> that delight
                  your users and grow your business.
                </p>
                <Link className="btn-white-line" href="#">
                  Contact Us
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
                  <img src="assets/images/photos/team/1.jpg" alt="" />
                </div>
                <div className="info">
                  <strong>Fletch Skinner</strong>
                  <span>Product Strategist</span>
                </div>
              </div>
              <div className="body">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
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
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src="assets/images/photos/team/2.jpg" alt="" />
                </div>
                <div className="info">
                  <strong>Lance Bogrol</strong>
                  <span>Visual Designer</span>
                </div>
              </div>
              <div className="body">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
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
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="team-item">
              <div className="header">
                <div className="img">
                  <img src="assets/images/photos/team/3.jpg" alt="" />
                </div>
                <div className="info">
                  <strong>Valentino Morose</strong>
                  <span>Android Developer</span>
                </div>
              </div>
              <div className="body">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
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
              <div className="body">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
