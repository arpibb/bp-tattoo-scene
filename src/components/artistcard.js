import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import "./artistcard.scss"
import Tag from "../components/tag"
//import Tag from "../components/tag"

class Artistcard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bgColor: this.props.bgColor
        }
    }

    onChange(){
        this.setState({
            bgColor: this.props.bgColor
        })
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.bgColor!==prevState.bgColor){
          return { bgColor: nextProps.bgColor};
       }
       else return null;
    }
    
    render(){
        let bgColor = this.props.bgColor
        //console.log(bgColor)
        return (
            <div className="artistcard" style={{backgroundColor: `${bgColor}`}}>
                    <h3 className="artist-name">{this.props.name}</h3>
                    <img className="artist-portrait" src={this.props.src} alt="Something went wrong :(" 
                    style= {{
                        maxWidth: "75px",
                        height: "auto",
                    }}/>
                    <p className="artist-intro">{this.props.intro}</p>

                    {this.props.tags.map(tag => {
                        return (
                            <Tag
                                tagName = {tag}
                                isActive = {this.props.tagsState[tag]}
                                handleClick = {this.props.handleClick}
                                tagIsOnArtistCard = {true}
                                bgColor = {this.state.bgColor}
                            />
                            // <p className="artist-tag">{tag}</p>
                        )
                    })}
            </div>
        )
}}

export default Artistcard