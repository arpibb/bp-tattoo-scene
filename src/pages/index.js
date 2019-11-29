import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Artistcard from "../components/artistcard"
import Tag from "../components/tag"
import "./index.scss"

const IndexPage = (props) => {
  const artists = props.data.allFile.edges;

  function getTags(artists){
    let tags = []
    artists.map(artist => {
      artist.node.childMarkdownRemark.frontmatter.tags.forEach(tag=>{
        if(!tags.includes(tag))
          tags.push(tag)

      })
      return tags
    })
    return tags
  }
  const tags = getTags(artists)
  console.log(tags)

  
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
      <section id="tag-section">
        {tags.map(tag => {
          return(
            <Tag
              tag = {tag}
            />)
        })}
      </section>
      <section id="artist-cards-section">
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
      </section>
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
