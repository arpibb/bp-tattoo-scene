import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import "./artistcard.scss"

const Artistcard = (props) => {

    return (
        <div className="artistcard">
                <h3 className="artist-name">{props.name}</h3>
                <img className="artist-portrait" src={props.src} alt="Something went wrong :(" 
                style= {{
                    maxWidth: "75px",
                    height: "auto",
                }}/>
                <p className="artist-intro">{props.intro}</p>
                {props.tags.map(tag => {
                    return (
                        <p className="artist-tag">{tag}</p>
                    )
                })}
        </div>
    )
}

export default Artistcard