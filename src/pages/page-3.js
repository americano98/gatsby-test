import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const page3 = () => (
  <Layout>
    <Seo title="Home" />
    <h1>My first Gatsby page</h1>
    <p>Creating web-sites with Gatsby is really fan/ I'll try</p>
    <StaticImage
      src="../images/ametist-1.jpg"
      width={399}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Аметист"
    />
    <p>
      <Link to="/">Go to home page</Link> <br />
    </p>
  </Layout>
)

export default page3
