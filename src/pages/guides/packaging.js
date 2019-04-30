import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Packaging = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "packaging_heading" })} />
    <h1>{intl.formatMessage({ id: "packaging_heading" })}</h1>
    <ul>
      <li>{intl.formatMessage({ id: "packaging_1" })} </li>
      <li>{intl.formatMessage({ id: "packaging_2" })} </li>
      <li>{intl.formatMessage({ id: "packaging_3" })} </li>
      <li>{intl.formatMessage({ id: "packaging_4" })} </li>
      <li>{intl.formatMessage({ id: "packaging_5" })} </li>
      <li>{intl.formatMessage({ id: "packaging_6" })} </li>
      <li>{intl.formatMessage({ id: "packaging_7" })} </li>
      <li>{intl.formatMessage({ id: "packaging_8" })} </li>
      <a href="https://agoa.info/images/documents/5174/Packaging%20in%20West%20Africa%20-%20Resource%20Guide.pdf">
        {intl.formatMessage({ id: "more" })}
      </a>
    </ul>
  </Layout>
)

export default injectIntl(Packaging)
