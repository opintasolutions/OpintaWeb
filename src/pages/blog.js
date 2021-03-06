import React from "react"
import { graphql, Link } from "gatsby"
import PageCover from "../components/pageCover"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  let blogs = data.allWordpressPost.edges
  let categories = data.allWordpressCategory.edges
  console.log(blogs)
  return (
    <Layout headerClass={"header-area header-white"}>
      <SEO title="Blog" />
      <section className="page">
        <PageCover
          img=""
          h1="Blog"
          breadCrumbs={[
            {
              text: "Home",
              link: "/",
              active: false,
            },
            {
              text: "Blog",
              link: "/blog",
              active: true,
            },
          ]}
        />
        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="blog-list">
                  <div className="row">
                    {/* blog preview begin  */}
                    {blogs.slice(blogs.length - 1).map(({ node }) => (
                      <div className="col-lg-12">
                        <div className="blog-post-thumb big">
                          <div className="img">
                            <div
                              style={{
                                backgroundImage: node.featured_media.localFile
                                  ? `url(${node.featured_media.localFile.url})`
                                  : "",
                                // backgroundImage: `url(${
                                //   node.featured_media.localFile.url
                                // })`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                              }}
                            />
                            {
                              // <img
                              //   src={node.featured_media.localFile.url}
                              //   alt=""
                              // />
                            }
                          </div>
                          <div className="post-content">
                            <div className="date">
                              {new Date(node.date).toDateString().slice(4)}
                            </div>
                            <ul className="post-meta">
                              <li>
                                <Link to="#">
                                  <span className="icon fa fa-user" />
                                  by {node.author.name}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/category/${node.categories[0].slug}`}
                                >
                                  <span className="icon fa fa-list-alt" />
                                  {node.categories[0].name}
                                </Link>
                              </li>
                            </ul>
                            <h3>
                              <Link to={`/post/${node.slug}`}>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: node.title,
                                  }}
                                />
                              </Link>
                            </h3>
                            <div
                              className="text"
                              dangerouslySetInnerHTML={{ __html: node.excerpt }}
                            />
                            <Link
                              to={`/post/${node.slug}`}
                              className="btn-primary-line"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    {blogs.slice(0, 4).map(({ node }) => (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="blog-post-thumb">
                          <div className="img">
                            <div
                              style={{
                                backgroundImage: node.featured_media.localFile
                                  ? `url(${node.featured_media.localFile.url})`
                                  : "",
                                // backgroundImage: `url(${
                                //   node.featured_media.localFile.url
                                // })`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                              }}
                            />
                            {
                              // <img
                              //   src={node.featured_media.localFile.url}
                              //   alt=""
                              // />
                            }
                          </div>
                          <div className="post-content">
                            <div className="date">
                              {new Date(node.date).toDateString().slice(4)}
                            </div>
                            <ul className="post-meta">
                              <li>
                                <Link to="#">
                                  <span className="icon fa fa-user" />
                                  by {node.author.name}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/category/${node.categories[0].slug}`}
                                >
                                  <span className="icon fa fa-list-alt" />
                                  {node.categories[0].name}
                                </Link>
                              </li>
                            </ul>
                            <h3>
                              <Link to={`/post/${node.slug}`}>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: node.title,
                                  }}
                                />
                              </Link>
                            </h3>
                            <div
                              className="text"
                              dangerouslySetInnerHTML={{
                                __html: node.excerpt
                                  .split(" ")
                                  .slice(0, 30)
                                  .join(" "),
                              }}
                            />
                            <Link
                              to={`/post/${node.slug}`}
                              className="btn-primary-line"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* blog preview ends */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <aside className="default-aside">
                  <div className="sidebar">
                    <ul>
                      {categories.map(({ node }) => (
                        <li>
                          <Link to={`/category/${node.slug}`}>
                            {node.name} <span>{node.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="home-services-item box active">
                      <h5 className="services-title">
                        Tell us about your projects and we’ll get back to you
                        with details on how we can make this work. Or just ask
                        us anything mobile.
                      </h5>
                      <div className="phone">
                        <i className="fa fa-phone" />
                        <span>+91 9096887733</span>
                      </div>
                      <Link className="btn-white-line" to="/contact">
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
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          date
          categories {
            name
            slug
          }
          excerpt
          slug
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
    }
    allWordpressCategory(filter: { count: { ne: 0 } }) {
      edges {
        node {
          name
          slug
          count
        }
      }
    }
  }
`
