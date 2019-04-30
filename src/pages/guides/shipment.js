import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Shipment = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "shipment_heading" })} />
    <h1>{intl.formatMessage({ id: "shipment_heading" })}</h1>
    <p>{intl.formatMessage({ id: "shipment_description" })}</p>
    <ul>
      <li>{intl.formatMessage({ id: "shipment_1" })} </li>
      <li>{intl.formatMessage({ id: "shipment_2" })} </li>
      <li>
        {intl.formatMessage({ id: "shipment_3" })}
        <ul>
          <li>{intl.formatMessage({ id: "shipment_3_1" })}</li>
        </ul>
      </li>
      <li>{intl.formatMessage({ id: "shipment_4" })} </li>
    </ul>
  </Layout>
)

export default injectIntl(Shipment)
