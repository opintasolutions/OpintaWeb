import React from "react"
import { Link } from "gatsby"
/*
 * let breadCrumbs = [{text: "Home", link: "/", active: false},{text: "Blog", link: "/blogs", active: true}]
 */

const PageCover = ({ img, h1, breadCrumbs }) => (
  <div
    className="cover"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="page-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{h1}</h1>
          </div>
          <div className="col-lg-12 text-center">
            <ol className="breadcrumb">
              {breadCrumbs.map(li => (
                <li className={li.active ? "active" : ""}>
                  {!li.active ? (
                    <Link to={li.link}>{li.text}</Link>
                  ) : (
                    <span>{li.text}</span>
                  )}
                </li>
              ))}
              {/* <li>
            //   <Link to="/">Home</Link>
            // </li>
             // <li className="active">Blog</li>*/}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PageCover
