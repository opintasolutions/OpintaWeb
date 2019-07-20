import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout headerClass="header-area header-white">
    <SEO title="404: Not found" />

    <div
      style={{
        margin: "110px 50px 50px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>404 | NOT FOUND</h1>
    </div>
  </Layout>
)

export default NotFoundPage
