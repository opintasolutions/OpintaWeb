import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../assets/images/icons/apps/1.png"

import "../style.css"

import img11 from "../assets/images/icons/apps/1.jpg"
import img12 from "../assets/images/icons/apps/Trawis Connect.png"
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
                    <Link to="/">Home</Link>
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
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img11} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">SMSA Infracon</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img12} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Trawis Connect</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img13} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Swaraj Khabar</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img14} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Jankari Junction</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img15} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">Prayatna Eduventures</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/our-work/#" className="page-app">
                <div className="app-top">
                  <div className="icon">
                    <img src={img16} className="img-apps-colored" alt="" />
                  </div>
                  <div className="app-title">
                    <h5 className="title">KNS Restaurant</h5>
                  </div>
                </div>
                <div className="app-content">
                  <div className="text">
                    Nunc luctus ante nec turpis faucibus varius. Sed consectetur
                    urna sed odio varius vehicula. Aenean tincidunt venenatis
                    ex.
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

export default OurWorkPage
