import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = () => (
  <Layout>
    <section className="page">
      <div className="cover" data-image="assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Services</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="blue-index.html">Home</Link>
                  </li>
                  <li className="active">Services</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="blue-services-single.html" className="services-post">
                <div className="img">
                  <img src="assets/images/photos/services/1.jpg" alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Mobility Services Strategy</h3>
                  <div className="text">
                    Mauris tellus sem, ultrices varius nisl at, convallis
                    iaculis mauris. Sed eget sem vitae purus tempus dignissim.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="blue-services-single.html" className="services-post">
                <div className="img">
                  <img src="assets/images/photos/services/2.jpg" alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Native App Development</h3>
                  <div className="text">
                    Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                    Interdum et malesuada fames ac ante ipsum primis.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="blue-services-single.html" className="services-post">
                <div className="img">
                  <img src="assets/images/photos/services/3.jpg" alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Design & User Experience</h3>
                  <div className="text">
                    Quisque euismod nec lacus sit amet maximus. Ut convallis
                    sagittis lorem auctor malesuada. Morbi auctor.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="blue-services-single.html" className="services-post">
                <div className="img">
                  <img src="assets/images/photos/services/4.jpg" alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Maintenance and App Monitoring</h3>
                  <div className="text">
                    Quisque euismod nec lacus sit amet maximus. Ut convallis
                    sagittis lorem auctor malesuada. Morbi auctor.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="blue-services-single.html" className="services-post">
                <div className="img">
                  <img src="assets/images/photos/services/5.jpg" alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>User Definition and User Profiling</h3>
                  <div className="text">
                    Quisque euismod nec lacus sit amet maximus. Ut convallis
                    sagittis lorem auctor malesuada. Morbi auctor.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="blue-services-single.html" className="services-post">
                <div className="img">
                  <img src="assets/images/photos/services/6.jpg" alt="" />
                </div>
                <div className="post-content">
                  <div className="icon">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <h3>Graphic Assets for App Stores</h3>
                  <div className="text">
                    Quisque euismod nec lacus sit amet maximus. Ut convallis
                    sagittis lorem auctor malesuada. Morbi auctor.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ServicePage
