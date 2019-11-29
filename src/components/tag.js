import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import "./tag.scss"

const Tag = (props) => {
    return (
        <p className="artist-tag">{props.tag}</p>
    )
}

export default Tag