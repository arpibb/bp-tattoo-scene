import React from "react";
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import "./tag.scss"

class Tag extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bgColor: this.props.bgColor
        }}

    getBtnClass(){
        let tagIsOnArtistCard = this.props.tagIsOnArtistCard

        let btnClass = ""

        if(tagIsOnArtistCard){
            btnClass = this.props.isActive ? "artist-tag active" : "artist-tag inactive";
        }
        else{
            btnClass = this.props.isActive ? "tags-artist-tag active" : "tags-artist-tag inactive";
        }
        return btnClass
    }

    onChange(){
        this.setState({
            bgColor: this.props.bgColor
        })
    }


    render() {

        let btnClass = this.getBtnClass()
        //let bgColor = this.state.bgColor;
        
        //console.log(this.props.isActive)

        return(
            <p style={{backgroundColor: `${this.state.bgColor}`}}
                className={btnClass}
                onClick = {(e) => this.props.handleClick(this.props.tagName)}
            >{this.props.tagName}</p>
        )
    }
}

export default Tag