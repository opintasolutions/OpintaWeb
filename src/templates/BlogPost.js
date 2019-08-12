import React from "react"
import { graphql, Link } from "gatsby"
import PageCover from "../components/pageCover"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  let categories = data.allWordpressCategory.edges

  return (
    <Layout headerClass={"header-area header-white"}>
      <SEO title="Blog" />
      <section className="page">
        <PageCover
          img={
            data.wordpressPost.featured_media.localFile
              ? data.wordpressPost.featured_media.localFile.url
              : ""
          }
          h1={data.wordpressPost.title}
          breadCrumbs={[
            {
              text: "Home",
              link: "/",
              active: false,
            },
            {
              text: "Blog",
              link: "/blog",
              active: false,
            },
          ]}
        />
        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-post-thumb big mbottom-60">
                      <div className="img">
                        <div
                          style={{
                            backgroundImage: data.wordpressPost.featured_media
                              .localFile
                              ? `url(${
                                  data.wordpressPost.featured_media.localFile
                                    .url
                                })`
                              : "",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                          }}
                        />
                        {
                          // <img
                          //   src={data.wordpressPost.featured_media.localFile.url}
                          //   alt=""
                          //   style={{ width: "100%" }}
                          // />
                        }
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
                            <Link
                              to={`/category/${
                                data.wordpressPost.categories[0].slug
                              }`}
                            >
                              <span className="icon fa fa-list-alt" />{" "}
                              {data.wordpressPost.categories[0].name}
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
                        <span>(272) 211-7370</span>
                      </div>
                      <Link className="btn-white-line" href="#">
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

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date
      categories {
        name
        slug
      }
      author {
        name
      }
      featured_media {
        localFile {
          url
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
