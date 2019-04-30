import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Livestock = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "livestock_name" })} />
    <h1>{intl.formatMessage({ id: "livestock_name" })}</h1>

    <ul>
      <li>{intl.formatMessage({ id: "livestock_agency" })}</li>
      <li>{intl.formatMessage({ id: "livestock_desc_1" })} </li>
      <li>{intl.formatMessage({ id: "livestock_desc_2" })} </li>
      <li>{intl.formatMessage({ id: "livestock_desc_3" })} </li>

      <a href={intl.formatMessage({ id: "livestock_agency_url" })}>
        {intl.formatMessage({ id: "more" })}
      </a>
    </ul>
  </Layout>
)

export default injectIntl(Livestock)
