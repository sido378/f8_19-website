import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Regulations" />
    <h1>Regulations</h1>
    <h2>Generic Requirements</h2>
    <ul>
      <li>Proper Registration - Bank Account, Customs, ...</li>
      <li>
        Statement of terms - This is a statement that can accompany the
        quotation of prices, stating the terms under which the transaction will
        take place (including advance payments necessary, method of paying,
        insurance, etc.){" "}
      </li>
      <li>
        Export price list - Sometimes included in the statement of terms, this
        document outlines the prices of goods. It needs to be in English with
        prices in USD (dollars), and should be dated and valid for at least a
        six month period. The export price list should also include the “pack
        size” of the merchandise.{" "}
      </li>
      <li>
        Entry Documents -{" "}
        <a href="https://www.dhs.gov/how-do-i/find-importexport-forms">
          Find more about required forms
        </a>
      </li>
    </ul>
    <h2>Sector specific requirements</h2>
  </Layout>
)

export default SecondPage
