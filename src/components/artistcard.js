import React from 'react'
import Tag from '../components/tag'
import './global.scss'

class Artistcard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: this.props.bgColor,
    }
  }
  render() {
    console.log(this.props.insta)
    return (
      <div className="artistcard">
        <a className="artist-link" href={this.props.insta}>
          <h3 className="artist-name">{this.props.name}</h3>
        </a>
        {this.props.tags.map(tag => {
          return (
            <Tag
              tagName={tag}
              isActive={this.props.tagsState[tag]}
              handleClick={this.props.handleClick}
              tagIsOnArtistCard={true}
            />
          )
        })}
      </div>
    )
  }
}

export default Artistcard
