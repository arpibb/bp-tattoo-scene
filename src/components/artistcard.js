import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

const Artistcard = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.src} alt="Something went wrong :(" 
            style= {{
                maxWidth: "75px",
                height: "auto",
            }}/>
            <p>{props.intro}</p>
            {props.tags.map(tag => {
                return (
                    <p>{tag}</p>
                )
            })}

        </div>
    )
}

export default Artistcard