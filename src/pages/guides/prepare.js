import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Prepare = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "prepare_heading" })} />
    <h1>{intl.formatMessage({ id: "prepare_heading" })}</h1>
    <ul>
      <li>
        <h2>{intl.formatMessage({ id: "prepare_1" })}</h2>
        <ul>
          <li>{intl.formatMessage({ id: "prepare_1_1" })}</li>
          <li>
            {intl.formatMessage({ id: "prepare_1_2" })}
            <ul>
              <li>
                <li>{intl.formatMessage({ id: "prepare_1_2_1" })}</li>
              </li>
            </ul>
          </li>
        </ul>
      </li>
       <li>
        <h2>{intl.formatMessage({ id: "prepare_2" })}</h2>
        <ul>
          <li>
            {intl.formatMessage({ id: "prepare_2_1" })}
            <ul>
              <li>
                <li>{intl.formatMessage({ id: "prepare_2_1_1" })}</li>
                <li>{intl.formatMessage({ id: "prepare_2_1_2" })}</li>
                <li>{intl.formatMessage({ id: "prepare_2_1_3" })}</li>
                <li>{intl.formatMessage({ id: "prepare_2_1_4" })}</li>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <h2>{intl.formatMessage({ id: "prepare_3" })}</h2>
      </li>
      <li>
        <h2>{intl.formatMessage({ id: "prepare_4" })}</h2>
      </li>
    </ul>
  </Layout>
)

export default injectIntl(Prepare)
 