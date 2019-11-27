import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Artistcard from "../components/artistcard"

const IndexPage = (props) => {
  const artists = props.data.allFile.edges;

  
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
      <div>
      {artists.map(artist => {
        return (
          <Artistcard
            key = {artist.node.childMarkdownRemark.frontmatter.name}
            name = {artist.node.childMarkdownRemark.frontmatter.name}
            intro = {artist.node.childMarkdownRemark.frontmatter.intro}
            src = {artist.node.childMarkdownRemark.frontmatter.portrait}
            tags = {artist.node.childMarkdownRemark.frontmatter.tags}
          />
        )
      })}
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
