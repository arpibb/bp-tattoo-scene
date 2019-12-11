import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//import Artistcard from "../components/artistcard"
//import Tag from "../components/tag"
import "./index.scss"
import ProductFilter from "../components/productfilter"

const IndexPage = (props) => {
  const querydata = props.data.allFile.edges

  function getArtistData(data){
    const artists = []
    for (let i = 0; i<data.length; i++){
      artists.push(data[i].node.childMarkdownRemark.frontmatter)
    }
    //console.log(artists)
    return artists
  }
  
  function getTags(artists){
    let tags = {}  
    artists.map(artist => {
      artist.node.childMarkdownRemark.frontmatter.tags.forEach(tag => {
        if(!tags[`${tag}`])
          tags[`${tag}`] = false

      })
      return tags
    })
    return tags
  }
  const tags = getTags(querydata)
  
  const artists = getArtistData(querydata)
  //console.log(tags)


  
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
      
      <section>
        <ProductFilter
          stateObject = {tags}
          artists = {artists}
        />
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
