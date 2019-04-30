import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Deal = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "deal_heading" })} />
    <h1>{intl.formatMessage({ id: "deal_heading" })}</h1>
    <p>{intl.formatMessage({ id: "deal_description" })}</p>
    <ul>
      <li>{intl.formatMessage({ id: "deal_1" })} </li>
      <li>{intl.formatMessage({ id: "deal_2" })} </li>
      <li>{intl.formatMessage({ id: "deal_3" })} </li>
      <li>{intl.formatMessage({ id: "deal_4" })} </li>
      <li>{intl.formatMessage({ id: "deal_5" })} </li>
    </ul>
  </Layout>
)

export default injectIntl(Deal)
