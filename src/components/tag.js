import React from 'react'
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import './global.scss'

//import "./tag.scss"
import './global.scss'

class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // bgColor: this.props.bgColor
    }
  }

  getBtnClass() {
    let tagIsOnArtistCard = this.props.tagIsOnArtistCard

    let btnClass = ''

    if (tagIsOnArtistCard) {
      btnClass = this.props.isActive
        ? 'artist-tag active'
        : 'artist-tag inactive'
    } else {
      btnClass = this.props.isActive
        ? 'tags-artist-tag active'
        : 'tags-artist-tag inactive'
    }
    return btnClass
  }

  // static getDerivedStateFromProps(nextProps, prevState){
  //     if(nextProps.bgColor!==prevState.bgColor){
  //       return { bgColor: nextProps.bgColor};
  //    }
  //    else return null;
  // }

  render() {
    let btnClass = this.getBtnClass()
    //let bgColor = this.state.bgColor;

    //console.log(this.props.isActive)

    return (
      <p
        className={btnClass}
        onClick={e => this.props.handleClick(this.props.tagName)}
      >
        {this.props.tagName}
      </p>
    )
  }
}

export default Tag
