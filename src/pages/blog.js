import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../assets/images/photos/about/1.jpg"

const BlogPage = () => (
  <Layout headerClass={"header-area header-white"}>
    <SEO title="Blog" />
    <section className="page">
      <div className="cover" data-image="assets/images/photos/parallax.jpg">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Blog</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="blue-index.html">Home</Link>
                  </li>
                  <li className="active">Blog</li>
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
              <div className="blog-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-post-thumb big">
                      <div className="img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="post-content">
                        <div className="date">APR 09</div>
                        <ul className="post-meta">
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-user" />
                              by Gaus
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-comment-o" />3
                              Comments{" "}
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          <Link to="blue-blog-single.html">
                            5 steps to becoming GDPR compliant on mobile apps
                          </Link>
                        </h3>
                        <div className="text">
                          Mauris tellus sem, ultrices varius nisl at, convallis
                          iaculis mauris. Sed eget sem vitae purus tempus
                          dignissim. Quisque euismod nec lacus sit amet maximus.
                          Ut convallis sagittis lorem auctor malesuada. Morbi
                          auctor tortor eu risus condimentum.
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
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                      <div className="img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="post-content">
                        <div className="date">APR 09</div>
                        <ul className="post-meta">
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-user" />
                              by Gaus
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-comment-o" />3
                              Comments{" "}
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          <Link to="blue-blog-single.html">
                            Measuring app success through mobile analytics
                          </Link>
                        </h3>
                        <div className="text">
                          Cras imperdiet faucibus sem, a dignissim urna feugiat
                          sed. Interdum et malesuada fames ac ante ipsum primis
                          in faucibus.
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
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                      <div className="img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="post-content">
                        <div className="date">APR 09</div>
                        <ul className="post-meta">
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-user" />
                              by Gaus
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-comment-o" />3
                              Comments{" "}
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          <Link to="blue-blog-single.html">
                            How accessibility will influence your app dev
                          </Link>
                        </h3>
                        <div className="text">
                          Quisque euismod nec lacus sit amet maximus. Ut
                          convallis sagittis lorem auctor malesuada. Morbi
                          auctor tortor eu.
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
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                      <div className="img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="post-content">
                        <div className="date">APR 09</div>
                        <ul className="post-meta">
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-user" />
                              by Gaus
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-comment-o" />3
                              Comments{" "}
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          <Link to="blue-blog-single.html">
                            Measuring app success through mobile analytics
                          </Link>
                        </h3>
                        <div className="text">
                          Cras imperdiet faucibus sem, a dignissim urna feugiat
                          sed. Interdum et malesuada fames ac ante ipsum primis
                          in faucibus.
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
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="blog-post-thumb">
                      <div className="img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="post-content">
                        <div className="date">APR 09</div>
                        <ul className="post-meta">
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-user" />
                              by Gaus
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="icon fa fa-comment-o" />3
                              Comments{" "}
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          <Link to="blue-blog-single.html">
                            How accessibility will influence your app dev
                          </Link>
                        </h3>
                        <div className="text">
                          Quisque euismod nec lacus sit amet maximus. Ut
                          convallis sagittis lorem auctor malesuada. Morbi
                          auctor tortor eu.
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
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <aside className="default-aside">
                <div className="sidebar">
                  <div className="search-widget">
                    <div className="search">
                      <form action="">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="#">
                        Technology <span>23</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Companies <span>12</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Mobile <span>153</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Social Media <span>9</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        General <span>95</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        App Review <span>32</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Mobile Future <span>76</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="home-services-item box active">
                    <h5 className="services-title">
                      Tell us about your projects and we’ll get back to you with
                      details on how we can make this work. Or just ask us
                      anything mobile.
                    </h5>
                    <div className="phone">
                      <i className="fa fa-phone" />
                      <span>(272) 211-7370</span>
                    </div>
                    <Link className="btn-white-line" href="#">
                      Contact Us
                    </Link>
                  </div>
                  <div className="widget-tags">
                    <Link to="#">Team</Link>
                    <Link to="#">iOS</Link>
                    <Link to="#">Android</Link>
                    <Link to="#">App</Link>
                    <Link to="#">Feature</Link>
                    <Link to="#">Development</Link>
                    <Link to="#">Design</Link>
                    <Link to="#">Store</Link>
                    <Link to="#">UX</Link>
                    <Link to="#">Back-End</Link>
                    <Link to="#">UI</Link>
                    <Link to="#">Coding</Link>
                    <Link to="#">Database</Link>
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

export default BlogPage
