import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const CommonErrors = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "common_errors_heading" })} />
    <h1>{intl.formatMessage({ id: "common_errors_heading" })}</h1>
    <p>{intl.formatMessage({ id: "common_errors_description" })}</p>
    <ul>
      <li>{intl.formatMessage({ id: "common_errors_1" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_2" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_3" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_4" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_5" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_6" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_7" })}</li>
      <li>{intl.formatMessage({ id: "common_errors_8" })}</li>
    </ul>
  </Layout>
)

export default injectIntl(CommonErrors)
