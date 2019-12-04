import React from "react";
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import "./tag.scss"

class Tag extends React.Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    changeColor(){
        this.setState({active: !this.state.active})
    }


    render() {
        let btn_class = this.state.active ? "tags-artist-tag active" : "tags-artist-tag";

        return(
        <p className={btn_class} onClick={this.changeColor.bind(this)}
        >{this.props.tag}</p>        )
    }
}

export default Tag