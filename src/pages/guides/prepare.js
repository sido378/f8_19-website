import React from "react"
import { translate } from "react-i18next"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Prepare = ({ t }) => (
  <Layout>
    <SEO title="Prepare to export" />
    <h1>{t("heading")}</h1>
    <ul>
      <li>
        <h2>{t("1")}</h2>
        <ul>
          <li>{t("1_1")}</li>
          <li>
            {t("1_2")}
            <ul>
              <li>
                <li>{t("1_2_1")}</li>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <h2>{t("2")}</h2>
        <ul>
          <li>{t("1_1")}</li>
        </ul>
      </li>
      <li>
        <h2>{t("3")}</h2>
      </li>
      <li>
        <h2>{t("4")}</h2>
      </li>
    </ul>
  </Layout>
)

export default translate("prepare")(Prepare)
