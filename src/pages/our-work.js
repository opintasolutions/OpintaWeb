import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../assets/images/icons/apps/1.png"

import "../style.css"

import img11 from "../assets/images/icons/apps/1.jpg"
import img12 from "../assets/images/icons/apps/2.png"
import img13 from "../assets/images/icons/apps/3.jpg"
import img14 from "../assets/images/icons/apps/4.jpg"
import img15 from "../assets/images/icons/apps/5.png"
import img16 from "../assets/images/icons/apps/6.png"

const OurWorkPage = () => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Work" />
    <section className="page">
      <div className="cover" data-image="../assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Our Work</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="blue-index.html">Home</Link>
                  </li>
                  <li className="active">Our Work</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img11} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">SMSA Infracon</h5>
                    {
                      // <ul className="stars">
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>(144)</li>
                      // </ul>
                    }
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  {
                    // <ul className="app-table">
                    //   <li>
                    //     <div className="table-title">Size</div>
                    //     <div className="table-content">16.8 MB</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Category</div>
                    //     <div className="table-content">Office</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Languages</div>
                    //     <div className="table-content">
                    //       English, Arabic, Croatian, Czech, Danish, Dutch
                    //     </div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Age Rating</div>
                    //     <div className="table-content">Rated 12+</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Price</div>
                    //     <div className="table-content">Free</div>
                    //   </li>
                    // </ul>
                  }
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img12} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Extra Save</h5>
                    {
                      // <ul className="stars">
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>(72)</li>
                      // </ul>
                    }
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  {
                    // <ul className="app-table">
                    //   <li>
                    //     <div className="table-title">Size</div>
                    //     <div className="table-content">23.2 MB</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Category</div>
                    //     <div className="table-content">e-Commerce</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Languages</div>
                    //     <div className="table-content">
                    //       English, Arabic, Croatian, Czech, Danish, Dutch
                    //     </div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Age Rating</div>
                    //     <div className="table-content">Rated 12+</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Price</div>
                    //     <div className="table-content">
                    //       <div className="price">$9.99</div>
                    //     </div>
                    //   </li>
                    // </ul>
                  }
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img13} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Swaraj Khabar</h5>
                    {
                      // <ul className="stars">
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star " />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>(21)</li>
                      // </ul>
                    }
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  {
                    // <ul className="app-table">
                    //   <li>
                    //     <div className="table-title">Size</div>
                    //     <div className="table-content">168.8 MB</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Category</div>
                    //     <div className="table-content">Office</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Languages</div>
                    //     <div className="table-content">
                    //       English, Arabic, Croatian, Czech, Danish, Dutch
                    //     </div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Age Rating</div>
                    //     <div className="table-content">Rated 12+</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Price</div>
                    //     <div className="table-content">
                    //       <div className="price">$1.99</div>
                    //     </div>
                    //   </li>
                    // </ul>
                  }
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img14} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Jankari Junction</h5>
                    {
                      // <ul className="stars">
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>(123)</li>
                      // </ul>
                    }
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  {
                    // <ul className="app-table">
                    //   <li>
                    //     <div className="table-title">Size</div>
                    //     <div className="table-content">16.8 MB</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Category</div>
                    //     <div className="table-content">Tools</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Languages</div>
                    //     <div className="table-content">
                    //       English, Arabic, Croatian, Czech, Danish, Dutch
                    //     </div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Age Rating</div>
                    //     <div className="table-content">Rated 12+</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Price</div>
                    //     <div className="table-content">Free</div>
                    //   </li>
                    // </ul>
                  }
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img15} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Prayatna Eduventures</h5>
                    {
                      // <ul className="stars">
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>(374)</li>
                      // </ul>
                    }
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  {
                    // <ul className="app-table">
                    //   <li>
                    //     <div className="table-title">Size</div>
                    //     <div className="table-content">74.3 MB</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Category</div>
                    //     <div className="table-content">Business</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Languages</div>
                    //     <div className="table-content">
                    //       English, Arabic, Croatian, Czech, Danish, Dutch
                    //     </div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Age Rating</div>
                    //     <div className="table-content">Rated 12+</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Price</div>
                    //     <div className="table-content">Free</div>
                    //   </li>
                    // </ul>
                  }
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="blue-app-single.html" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img16} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">KNS Restaurant</h5>
                    {
                      // <ul className="stars">
                      //   <li>
                      //     <i className="fa fa-star active" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>
                      //     <i className="fa fa-star" />
                      //   </li>
                      //   <li>(98)</li>
                      // </ul>
                    }
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                  {
                    // <ul className="app-table">
                    //   <li>
                    //     <div className="table-title">Size</div>
                    //     <div className="table-content">16.8 MB</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Category</div>
                    //     <div className="table-content">Office</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Languages</div>
                    //     <div className="table-content">
                    //       English, Arabic, Croatian, Czech, Danish, Dutch
                    //     </div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Age Rating</div>
                    //     <div className="table-content">Rated 12+</div>
                    //   </li>
                    //   <li>
                    //     <div className="table-title">Price</div>
                    //     <div className="table-content">
                    //       <div className="price">$12.99</div>
                    //     </div>
                    //   </li>
                    // </ul>
                  }
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
