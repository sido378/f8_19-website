import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Payment = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "payment_heading" })} />
    <h1>{intl.formatMessage({ id: "payment_heading" })}</h1>
    <ul>
      <li>{intl.formatMessage({ id: "payment_1" })} </li>
      <li>{intl.formatMessage({ id: "payment_2" })} </li>
      <li>{intl.formatMessage({ id: "payment_3" })} </li>
      <li>{intl.formatMessage({ id: "payment_4" })} </li>
    </ul>
  </Layout>
)

export default injectIntl(Payment)
