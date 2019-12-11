import React from "react";
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import "./tag.scss"

class Tag extends React.Component {

    render() {

        let tagIsOnArtistCard = this.props.tagIsOnArtistCard

        let btnClass = ""

        if(tagIsOnArtistCard){
            btnClass = this.props.isActive ? "artist-tag active" : "artist-tag inactive";
        }
        else{
            btnClass = this.props.isActive ? "tags-artist-tag active" : "tags-artist-tag inactive";
        }
        //console.log(this.props.isActive)

        return(
            <p 
                className={btnClass}
                onClick = {(e) => this.props.handleClick(this.props.tagName)}
            >{this.props.tagName}</p>
        )
    }
}

export default Tag