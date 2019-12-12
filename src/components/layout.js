/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.bgColor = this.props.bgColor
    this.state = {
      documentLoaded: false,
    }
} 
  componentDidMount(){
    this.setState({documentLoaded:true});
  }

  render(){
  //   const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
    
  
  let bgColor = this.bgColor
    if(this.state.documentLoaded){
      document.body.style = `background: ${bgColor};`;
    }

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header/>>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{this.props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
