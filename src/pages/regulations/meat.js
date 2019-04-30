import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Meat = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "meat_name" })} />
    <h1>{intl.formatMessage({ id: "meat_name" })}</h1>

    <ul>
      <li>{intl.formatMessage({ id: "meat_agency" })}</li>
      <li>{intl.formatMessage({ id: "meat_desc" })} </li>

      <a href={intl.formatMessage({ id: "meat_agency_url" })}>
        {intl.formatMessage({ id: "more" })}
      </a>
    </ul>
  </Layout>
)

export default injectIntl(Meat)
