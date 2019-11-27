import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const data = props.data.allFile.edges
  
  return (
  <Layout>
    <SEO title="Home" />
    <div 
    style={{ 
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: 'center',
      }}>
      <Image 
      style={{
        width: "auto",
        height: "auto",
      }} />
    </div>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "artists"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              intro
              portrait
              tags
          }
        }
      }
    }
  }
}`
