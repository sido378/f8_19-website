import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Seeds = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "seeds_name" })} />
    <h1>{intl.formatMessage({ id: "seeds_name" })}</h1>

    <ul>
      <li>{intl.formatMessage({ id: "seeds_agency" })}</li>
      <li>{intl.formatMessage({ id: "seeds_desc" })} </li>
    </ul>
  </Layout>
)

export default injectIntl(Seeds)
