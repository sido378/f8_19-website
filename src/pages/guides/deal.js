import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Deal = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "deal_heading" })} />
    <h1>{intl.formatMessage({ id: "deal_heading" })}</h1>
    <ul>
      <li>
        <h2>{intl.formatMessage({ id: "deal_1" })}</h2>
        <ul>
          <li>{intl.formatMessage({ id: "deal_1_1" })}</li>
          <li>
            {intl.formatMessage({ id: "deal_1_2" })}
            <ul>
              <li>
                <li>{intl.formatMessage({ id: "deal_1_2_1" })}</li>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <h2>{intl.formatMessage({ id: "deal_2" })}</h2>
        <ul>
          <li>{intl.formatMessage({ id: "deal_1_1" })}</li>
        </ul>
      </li>
      <li>
        <h2>{intl.formatMessage({ id: "deal_3" })}</h2>
      </li>
      <li>
        <h2>{intl.formatMessage({ id: "deal_4" })}</h2>
      </li>
    </ul>
  </Layout>
)

export default injectIntl(Deal)
