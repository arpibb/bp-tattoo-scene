import React from 'react'

import Tag from '../components/tag'
import Artistcard from '../components/artistcard'
import './global.scss'

class ArtistFilter extends React.Component {
  constructor(props) {
    super(props)
    this.artists = this.props.artists
    this.handleClick = this.handleClick.bind(this)
    this.state = props.stateObject
  }

  getActiveTags() {
    let activeTags = []
    Object.entries(this.state).map(tagState => {
      if (tagState[1]) {
        activeTags.push(tagState[0])
      }
      return activeTags
    })
    return activeTags
  }
  handleClick(tagName) {
    let stateName = tagName
    this.setState(prevState => ({
      [stateName]: !prevState[stateName],
    }))
  }

  render() {
    let activeTags = this.getActiveTags()
    return (
      <div id="artistfilter-container">
        <section id="tag-section">
          {Object.entries(this.state).map(entry => {
            return (
              <Tag
                tagName={entry[0]}
                isActive={entry[1]}
                handleClick={this.handleClick}
                tagIsOnArtistCard={false}
              />
            )
          })}
        </section>
        <section id="artist-cards-section">
          {this.artists.map(artist => {
            if (
              activeTags.length === 0 ||
              activeTags.some(tag => artist.tags.includes(tag))
            )
              return (
                <Artistcard
                  key={artist.name}
                  name={artist.name}
                  insta={artist.insta}
                  tags={artist.tags}
                  tagsState={this.state}
                  handleClick={this.handleClick}
                />
              )
          })}
        </section>
      </div>
    )
  }
}

export default ArtistFilter
