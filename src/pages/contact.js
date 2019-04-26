import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <section className="page">
      <div className="cover" data-image="assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Contact Us</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="blue-index.html">Home</Link>
                  </li>
                  <li className="active">Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-bottom">
        <div className="map-wrapper">
          <div
            className="map-canvas"
            data-zoom="12"
            data-lat="-37.811085"
            data-lng="144.955631"
            data-type="roadmap"
            data-hue="#ffc400"
            data-title="Gaus"
            data-icon-path="assets/images/marker-blue.png"
            data-content="455 West Orchard Street<br>Kings Mountain, NC 28086<br><br><Link to='mailto:support@yourbrand.com'>support@yourbrand.com</Link>"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-info">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="item">
                        <i className="fa fa-location-arrow" />
                        <div className="txt">
                          <span>
                            455 West Orchard Street
                            <br />
                            Kings Mountain, NC 28086
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="item">
                        <i className="fa fa-phone" />
                        <div className="txt">
                          <span>
                            (272) 211-7370
                            <br />
                            (524) 386-5730
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="item">
                        <i className="fa fa-envelope" />
                        <div className="txt">
                          <span>
                            <Link to="mailto:support@yourbrand.com">
                              support@yourbrand.com
                            </Link>
                            <br />
                            <Link to="mailto:info@yourbrand.com">
                              info@yourbrand.com
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5 className="mbottom-30">Get in touch</h5>
              <div className="contact-text">
                <p>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra
                  dictum.{" "}
                </p>
                <p>
                  Sed blandit tempus purus, sed sodales leo rutrum vel. Nam
                  vulputate ipsum ac est congue, eget commodo magna lobortis.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="contact-form">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <input type="text" placeholder="Name, surname" />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <input type="text" placeholder="E-Mail" />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="Your message" />
                  </div>
                  <div className="col-lg-12">
                    <button className="btn-primary-line">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
