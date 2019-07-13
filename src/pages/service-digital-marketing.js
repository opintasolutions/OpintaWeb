import React from "react"
import { Link } from "gatsby"

import img1 from "../assets/images/photos/services/Digital_Marketing_Opinta.png"
import img2 from "../assets/images/photos/services/8.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServiceSingle = () => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Digital Marketing" />
    <section className="page">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Digital Marketing</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="active">Digital Marketing</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-bottom pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <img src={img1} className="img-fluid rounded mbottom-50" alt="" />

              <p>
                Proin pellentesque quam at quam aliquet, eget mattis quam
                euismod. Curabitur imperdiet suscipit facilisis. Maecenas diam
                quam, sodales eu est eu, posuere ultricies augue.
              </p>

              <p className="mbottom-50">
                Sed rhoncus facilisis risus, nec sagittis dui luctus in. Nunc
                eget ante odio. Suspendisse eu diam ut nisi ullamcorper
                interdum. Pellentesque sit amet quam risus. In a augue aliquam,
                venenatis tortor in, placerat purus. Donec rhoncus nisi sit amet
                convallis tempor.
              </p>

              <div className="row page-gallery-wrapper mbottom-20">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link
                    to="assets/images/photos/services/8.jpg"
                    className="page-gallery small"
                    title="Mobility Services Strategy"
                  >
                    <img src={img2} alt="" />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link
                    to="assets/images/photos/services/9.jpg"
                    className="page-gallery small"
                    title="Mobility Services Strategy"
                  >
                    <img src={img2} alt="" />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link
                    to="assets/images/photos/services/10.jpg"
                    className="page-gallery small"
                    title="Mobility Services Strategy"
                  >
                    <img src={img2} alt="" />
                  </Link>
                </div>
              </div>

              <p className="mbottom-50">
                Sed rhoncus facilisis risus, nec sagittis dui luctus in. Nunc
                eget ante odio. Suspendisse eu diam ut nisi ullamcorper
                interdum. Pellentesque sit amet quam risus. In a augue aliquam,
                venenatis tortor in, placerat purus. Donec rhoncus nisi sit amet
                convallis tempor.
              </p>

              <div className="faq" id="accordion">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-1"
                        data-aria-expanded="true"
                        data-aria-controls="faqCollapse-1"
                      >
                        Competition Research
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    className="collapse show"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div className="content">
                        <p>
                          Aliquam erat odio, fringilla at porta a, vehicula
                          ultricies est. Aliquam maximus turpis in dignissim
                          pellentesque. Ut dolor quam, aliquam eget bibendum
                          nec, luctus non metus. Morbi convallis imperdiet dolor
                          id porttitor.
                        </p>
                        <p>
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Sed finibus
                          faucibus congue. Interdum et malesuada fames ac ante
                          ipsum primis in faucibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  // <div className="card">
                  //   <div className="card-header" id="faqHeading-2">
                  //     <div className="mb-0">
                  //       <h5
                  //         className="faq-title"
                  //         data-toggle="collapse"
                  //         data-target="#faqCollapse-2"
                  //         data-aria-expanded="false"
                  //         data-aria-controls="faqCollapse-2"
                  //       >
                  //         User Definition & Profiling
                  //       </h5>
                  //     </div>
                  //   </div>
                }
                {
                  // <div
                  //   id="faqCollapse-2"
                  //   className="collapse"
                  //   aria-labelledby="faqHeading-2"
                  //   data-parent="#accordion"
                  // >
                  //   <div className="card-body">
                  //     <div className="content">
                  //       <p>
                  //         Aliquam erat odio, fringilla at porta a, vehicula
                  //         ultricies est. Aliquam maximus turpis in dignissim
                  //         pellentesque. Ut dolor quam, aliquam eget bibendum
                  //         nec, luctus non metus. Morbi convallis imperdiet dolor
                  //         id porttitor.
                  //       </p>
                  //       <p>
                  //         Vestibulum ante ipsum primis in faucibus orci luctus
                  //         et ultrices posuere cubilia Curae; Sed finibus
                  //         faucibus congue. Interdum et malesuada fames ac ante
                  //         ipsum primis in faucibus.
                  //       </p>
                  //     </div>
                  //   </div>
                  // </div>
                  // </div>
                  // <div className="card">
                  // <div className="card-header" id="faqHeading-3">
                  //   <div className="mb-0">
                  //     <h5
                  //       className="faq-title"
                  //       data-toggle="collapse"
                  //       data-target="#faqCollapse-3"
                  //       data-aria-expanded="false"
                  //       data-aria-controls="faqCollapse-3"
                  //     >
                  //       Performance Infrastructure: Analytics & KPIs
                  //     </h5>
                  //   </div>
                  // </div>
                  // <div
                  //   id="faqCollapse-3"
                  //   className="collapse"
                  //   aria-labelledby="faqHeading-3"
                  //   data-parent="#accordion"
                  // >
                  //   <div className="card-body">
                  //     <div className="content">
                  //       <p>
                  //         Aliquam erat odio, fringilla at porta a, vehicula
                  //         ultricies est. Aliquam maximus turpis in dignissim
                  //         pellentesque. Ut dolor quam, aliquam eget bibendum
                  //         nec, luctus non metus. Morbi convallis imperdiet dolor
                  //         id porttitor.
                  //       </p>
                  //       <p>
                  //         Vestibulum ante ipsum primis in faucibus orci luctus
                  //         et ultrices posuere cubilia Curae; Sed finibus
                  //         faucibus congue. Interdum et malesuada fames ac ante
                  //         ipsum primis in faucibus.
                  //       </p>
                  //     </div>
                  //   </div>
                  // </div>
                  // </div>
                }
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <aside className="default-aside">
                <div className="sidebar">
                  <ul>
                    <li>
                      <Link to="/service-web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/service-software-development">
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-app-development">App Development</Link>
                    </li>
                    <li>
                      <Link to="/service-bulk-messages">Bulk Messages</Link>
                    </li>
                    <li className="active">
                      <Link to="/service-digital-marketing">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-ivr">IVR (toll-free)</Link>
                    </li>
                  </ul>

                  {
                    // <Link to="#" className="download">
                    //   <div className="icon">
                    //     <i className="fa fa-file-pdf-o" />
                    //   </div>
                    //   <div className="text">Download application brochure.</div>
                    // </Link>
                    // <Link to="#" className="download">
                    //   <div className="icon">
                    //     <i className="fa fa-file-word-o" />
                    //   </div>
                    //   <div className="text">Download application brochure.</div>
                    // </Link>
                  }
                  <div className="home-services-item box active">
                    <h5 className="services-title">
                      Tell us about your projects and we’ll get back to you with
                      details on how we can make this work. Or just ask us
                      anything mobile.
                    </h5>
                    <div className="phone">
                      <i className="fa fa-phone" />
                      <span>+91 90968 87733</span>
                    </div>
                    <Link className="btn-white-line" to="#">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ServiceSingle
