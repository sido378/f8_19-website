import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Export readiness guide" />
    <h1>Get ready to export to the U.S.</h1>
    <ol>
      <li>
        <h3>Prepare Invoice</h3>
      </li>
      <li>
        <h3>Obtain Certificate of Origin (CoO)</h3>
      </li>
      <li>
        <h3>Export Logistics</h3>
      </li>
      <li>
        <h3>Declaration to U.S. Customs at Port of Entry</h3>
      </li>
    </ol>
    <p>
      Note: These are general export guidelines. There are special requirements
      for different products, take a look <Link to="/regulations">here</Link>.
    </p>
  </Layout>
)

export default SecondPage
