import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`export`, `us`, `regulations`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/regulations/">Go to regulations</Link>
    </Layout>
  )
}

window.extAsyncInit = function() {
  console.log("yayayay")
  // the Messenger Extensions JS SDK is done loading
}

export default IndexPage
