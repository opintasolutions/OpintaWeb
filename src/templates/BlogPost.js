import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => (
  <Layout headerClass={"header-area header-white"}>
    <section className="page">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${
            data.wordpressPost.featured_media.localFile.url
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>{data.wordpressPost.title}</h1>
              </div>
              <div className="col-lg-12 text-center">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="active">Blog Single</li>
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-post-thumb big mbottom-60">
                    <div className="img">
                      <img
                        src={data.wordpressPost.featured_media.localFile.url}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className="post-content">
                      <div className="date">
                        {new Date(data.wordpressPost.date)
                          .toDateString()
                          .slice(4)}
                      </div>
                      <ul className="post-meta mbottom-20">
                        <li>
                          <Link to="#">
                            <span className="icon fa fa-user" /> by{" "}
                            {data.wordpressPost.author.name}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fa fa-comment-o" />3 Comments{" "}
                          </Link>
                        </li>
                      </ul>

                      <div
                        className="text post-detail wordpressBlogContent"
                        dangerouslySetInnerHTML={{
                          __html: data.wordpressPost.content,
                        }}
                      />

                      <div className="post-footer">
                        <span>Share - </span>
                        <ul className="share">
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
                              <i className="fa fa-google-plus" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa fa-pinterest" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="section-comments">
                    <h5 className="mbottom-40">Comments (3)</h5>
                    <ul>
                      <li>
                        <div className="avatar">
                          <img src="assets/images/comment-avatar.png" alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="comment-by">
                            <strong>Hans Down</strong>
                            <span>09 APR 2018</span>
                            <Link to="#" className="btn-reply">
                              <i className="fa fa-reply" /> Reply
                            </Link>
                          </div>
                          <p>
                            Praesent ut fringilla ligula. Vivamus et lacus nec
                            risus malesuada vestibulum. Phasellus lobortis
                            viverra lobortis. Donec iaculis, erat eu bibendum
                            faucibus.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="avatar">
                          <img src="assets/images/comment-avatar.png" alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="comment-by">
                            <strong>Penny Tool</strong>
                            <span>09 APR 2018</span>
                            <Link to="#" className="btn-reply">
                              <i className="fa fa-reply" /> Reply
                            </Link>
                          </div>
                          <p>
                            Praesent ut fringilla ligula. Vivamus et lacus nec
                            risus malesuada vestibulum. Phasellus lobortis
                            viverra lobortis. Donec iaculis, erat eu bibendum
                            faucibus.
                          </p>
                        </div>
                        <ul>
                          <li>
                            <div className="avatar">
                              <img
                                src="assets/images/comment-avatar.png"
                                alt=""
                              />
                            </div>
                            <div className="comment-content">
                              <div className="comment-by">
                                <strong>Eric Widget</strong>
                                <span>09 APR 2018</span>
                                <Link to="#" className="btn-reply">
                                  <i className="fa fa-reply" /> Reply
                                </Link>
                              </div>
                              <p>
                                Praesent ut fringilla ligula. Vivamus et lacus
                                nec risus malesuada vestibulum. Phasellus
                                lobortis viverra lobortis. Donec iaculis, erat
                                eu bibendum faucibus.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="post-comment">
                    <h5 className="mbottom-30">Post a Comment</h5>
                    <div className="comment-form">
                      <form action="" method="post">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-item">
                              <label for="f1">Name:</label>
                              <input type="text" id="f1" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-item">
                              <label for="f2">Email:</label>
                              <input type="text" id="f2" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-item">
                              <label for="f3">Comment:</label>
                              <textarea id="f3" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button type="submit" className="btn-primary-line">
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date
      author {
        name
      }
      featured_media {
        localFile {
          url
        }
      }
    }
  }
`
