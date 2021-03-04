import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ArtistFilter from '../components/artistfilter'
import '../components/global.scss'

const IndexPage = props => {
  const querydata = props.data.allFile.edges

  const getArtistData = data => {
    const artists = []
    for (let i = 0; i < data.length; i++) {
      artists.push(data[i].node.childMarkdownRemark.frontmatter)
    }
    return artists
  }

  const getTags = artists => {
    let tags = {}
    artists.map(artist => {
      artist.node.childMarkdownRemark.frontmatter.tags.forEach(tag => {
        if (!tags[`${tag}`]) tags[`${tag}`] = false
      })
      return tags
    })
    return tags
  }

  const tags = getTags(querydata)

  const artists = getArtistData(querydata)

  return (
    <Layout>
      <Helmet>
      </Helmet>
      <SEO title="Home" />
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Image
          style={{
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>

      <section id="artistfilter">
        <ArtistFilter
          stateObject={tags}
          artists={artists}
        />
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "artists" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              insta
              tags
            }
          }
        }
      }
    }
  }
`
