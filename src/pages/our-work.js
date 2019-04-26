import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../assets/images/icons/apps/1.png"
import img2 from "../assets/images/icons/apps/2.png"
import img3 from "../assets/images/icons/apps/3.png"
import img4 from "../assets/images/icons/apps/4.png"
import img5 from "../assets/images/icons/apps/5.png"
import img6 from "../assets/images/icons/apps/6.png"

const OurWorkPage = () => (
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
    <section classNameName="page">
      <div
        classNameName="cover"
        data-image="../assets/images/photos/parallax.jpg"
      >
        <div classNameName="page-top">
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col-lg-12">
                <h1>Our Work</h1>
              </div>
              <div classNameName="col-lg-12 text-center">
                <ol classNameName="breadcrumb">
                  <li>
                    <Link to="blue-index.html">Home</Link>
                  </li>
                  <li classNameName="active">Our Work</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="page-bottom pbottom-70">
        <div classNameName="container">
          <div classNameName="row">
            <div classNameName="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" classNameName="page-app">
                <div classNameName="app-top">
                  <div classNameName="icon">
                    <img src={img6} alt="" />
                  </div>
                  <div classNameName="app-title">
                    <h5 classNameName="title">Mobile Stats</h5>
                    <ul classNameName="stars">
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>(144)</li>
                    </ul>
                  </div>
                </div>
                <div classNameName="app-content">
                  <div classNameName="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  <ul classNameName="app-table">
                    <li>
                      <div classNameName="table-title">Size</div>
                      <div classNameName="table-content">16.8 MB</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Category</div>
                      <div classNameName="table-content">Office</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Languages</div>
                      <div classNameName="table-content">
                        English, Arabic, Croatian, Czech, Danish, Dutch
                      </div>
                    </li>
                    <li>
                      <div classNameName="table-title">Age Rating</div>
                      <div classNameName="table-content">Rated 12+</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Price</div>
                      <div classNameName="table-content">Free</div>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
            <div classNameName="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" classNameName="page-app">
                <div classNameName="app-top">
                  <div classNameName="icon">
                    <img src={img1} alt="" />
                  </div>
                  <div classNameName="app-title">
                    <h5 classNameName="title">Online Shopping</h5>
                    <ul classNameName="stars">
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>(72)</li>
                    </ul>
                  </div>
                </div>
                <div classNameName="app-content">
                  <div classNameName="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  <ul classNameName="app-table">
                    <li>
                      <div classNameName="table-title">Size</div>
                      <div classNameName="table-content">23.2 MB</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Category</div>
                      <div classNameName="table-content">e-Commerce</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Languages</div>
                      <div classNameName="table-content">
                        English, Arabic, Croatian, Czech, Danish, Dutch
                      </div>
                    </li>
                    <li>
                      <div classNameName="table-title">Age Rating</div>
                      <div classNameName="table-content">Rated 12+</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Price</div>
                      <div classNameName="table-content">
                        <div classNameName="price">$9.99</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>

            <div classNameName="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" classNameName="page-app">
                <div classNameName="app-top">
                  <div classNameName="icon">
                    <img src={img2} alt="" />
                  </div>
                  <div classNameName="app-title">
                    <h5 classNameName="title">Pocket Office</h5>
                    <ul classNameName="stars">
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star " />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>(21)</li>
                    </ul>
                  </div>
                </div>
                <div classNameName="app-content">
                  <div classNameName="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  <ul classNameName="app-table">
                    <li>
                      <div classNameName="table-title">Size</div>
                      <div classNameName="table-content">168.8 MB</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Category</div>
                      <div classNameName="table-content">Office</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Languages</div>
                      <div classNameName="table-content">
                        English, Arabic, Croatian, Czech, Danish, Dutch
                      </div>
                    </li>
                    <li>
                      <div classNameName="table-title">Age Rating</div>
                      <div classNameName="table-content">Rated 12+</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Price</div>
                      <div classNameName="table-content">
                        <div classNameName="price">$1.99</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>

            <div classNameName="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" classNameName="page-app">
                <div classNameName="app-top">
                  <div classNameName="icon">
                    <img src={img3} alt="" />
                  </div>
                  <div classNameName="app-title">
                    <h5 classNameName="title">Awesome Mail</h5>
                    <ul classNameName="stars">
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>(123)</li>
                    </ul>
                  </div>
                </div>
                <div classNameName="app-content">
                  <div classNameName="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  <ul classNameName="app-table">
                    <li>
                      <div classNameName="table-title">Size</div>
                      <div classNameName="table-content">16.8 MB</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Category</div>
                      <div classNameName="table-content">Tools</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Languages</div>
                      <div classNameName="table-content">
                        English, Arabic, Croatian, Czech, Danish, Dutch
                      </div>
                    </li>
                    <li>
                      <div classNameName="table-title">Age Rating</div>
                      <div classNameName="table-content">Rated 12+</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Price</div>
                      <div classNameName="table-content">Free</div>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>

            <div classNameName="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" classNameName="page-app">
                <div classNameName="app-top">
                  <div classNameName="icon">
                    <img src={img4} alt="" />
                  </div>
                  <div classNameName="app-title">
                    <h5 classNameName="title">Coding Life</h5>
                    <ul classNameName="stars">
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>(374)</li>
                    </ul>
                  </div>
                </div>
                <div classNameName="app-content">
                  <div classNameName="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  <ul classNameName="app-table">
                    <li>
                      <div classNameName="table-title">Size</div>
                      <div classNameName="table-content">74.3 MB</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Category</div>
                      <div classNameName="table-content">Business</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Languages</div>
                      <div classNameName="table-content">
                        English, Arabic, Croatian, Czech, Danish, Dutch
                      </div>
                    </li>
                    <li>
                      <div classNameName="table-title">Age Rating</div>
                      <div classNameName="table-content">Rated 12+</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Price</div>
                      <div classNameName="table-content">Free</div>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>

            <div classNameName="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" classNameName="page-app">
                <div classNameName="app-top">
                  <div classNameName="icon">
                    <img src={img5} alt="" />
                  </div>
                  <div classNameName="app-title">
                    <h5 classNameName="title">Call Recorder</h5>
                    <ul classNameName="stars">
                      <li>
                        <i classNameName="fa fa-star active" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>
                        <i classNameName="fa fa-star" />
                      </li>
                      <li>(98)</li>
                    </ul>
                  </div>
                </div>
                <div classNameName="app-content">
                  <div classNameName="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  <ul classNameName="app-table">
                    <li>
                      <div classNameName="table-title">Size</div>
                      <div classNameName="table-content">16.8 MB</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Category</div>
                      <div classNameName="table-content">Office</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Languages</div>
                      <div classNameName="table-content">
                        English, Arabic, Croatian, Czech, Danish, Dutch
                      </div>
                    </li>
                    <li>
                      <div classNameName="table-title">Age Rating</div>
                      <div classNameName="table-content">Rated 12+</div>
                    </li>
                    <li>
                      <div classNameName="table-title">Price</div>
                      <div classNameName="table-content">
                        <div classNameName="price">$12.99</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default OurWorkPage
