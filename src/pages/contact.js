import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Contact" />
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
          {/*          <div
            data-zoom="12"
            data-lat="-37.811085"
            data-lng="144.955631"
            data-type="roadmap"
            data-hue="#ffc400"
            data-title="Gaus"
            data-icon-path="assets/images/marker-blue.png"
            data-content="455 West Orchard Street<br>Kings Mountain, NC 28086<br><br><Link to='mailto:support@yourbrand.com'>support@yourbrand.com</Link>"
          /> */}
          <div class="mapouter">
            <div className="map-canvas">
              <iframe
                style={{ width: "100%", height: "100%" }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=opinta%20solutions&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-info">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="item">
                        <i className="fa fa-location-arrow" />
                        <div className="txt" style={{ fontSize: "12px" }}>
                          GAT NO-123 H.NO-3131, 01,
                          <br />
                          Moshi - Alandi Rd, Tal Haveli, Alandi, Pune,
                          Maharashtra 412105
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="item">
                        <i className="fa fa-envelope" />
                        <div className="txt">
                          <span>
                            <Link to="mailto:support@yourbrand.com">
                              mail@opintasolutions.com
                            </Link>
                            <br />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="item">
                        <i className="fa fa-phone" />
                        <div className="txt">
                          <span>
                            +91 84484 50015
                            <br />
                            +91 90968 87733
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
                  Got stuck contact us. What do you think let’s start now ? Get
                  in touch with our team to find out how our services can help
                  you transform and perform, and to discuss your business needs
                  in detail.
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
