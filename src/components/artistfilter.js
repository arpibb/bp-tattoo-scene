import React from "react"

import Tag from "../components/tag"
import Artistcard from "../components/artistcard"
//import "./artistfilter.scss"
import "./global.scss"


class ArtistFilter extends React.Component {
    constructor(props){
        super(props);
        // this.bgColor = this.props.bgColor
        this.artists = this.props.artists
        this.handleClick = this.handleClick.bind(this)
        this.state = props.stateObject
    }

    // An array where we register the selected tags is necessary to filter the results
    getActiveTags(){
        let activeTags = []
        Object.entries(this.state).map(tagState => { 
            if(tagState[1]){
                activeTags.push(tagState[0])
            }
            return activeTags})
        //console.log(activeTags)
        return activeTags
    }
    // When one of the tags is clicked this function gets called, and changes the state of the tag from true -> false and false -> true
    handleClick(tagName) {
        //console.log(this.state.tags[tagName])
        let stateName = tagName
        this.setState(prevState => ({
              [stateName] : !prevState[stateName]
        }))
      }

    render(){

        let activeTags = this.getActiveTags();
        //console.log(this.state.bgColor+"bgcolor")
        // console.log(this.props.bgColor)
        return(
            <div id="artistfilter-container">
            {/* Tag-section provides the filters for the tattoo artist filter component, 
            we are passing the key-value pairs from this components state, the handleClick function provides the selection on the tags. */}
            <section id="tag-section">
                {Object.entries(this.state).map(entry => {
                    return(
                        <Tag
                            tagName = {entry[0]}
                            isActive = {entry[1]}
                            handleClick = {this.handleClick}
                            tagIsOnArtistCard = {false}
                            //bgColor = {this.props.bgColor}
                        />
                    )})}
            </section>
            {/* The artist cards section is where all the tattoo artists cards are displayed, based on the active Tags, which are the already clicked tags,
            when there is no tags selected, all the artistscards are going to be displayed. */}
            <section id="artist-cards-section">
                {this.artists.map(artist => {
                    if (activeTags.length === 0 || activeTags.some(tag => artist.tags.includes(tag)) )
                        return (
                            <Artistcard
                                key = {artist.name}
                                name = {artist.name}
                                intro = {artist.intro}
                                src = {artist.portrait}
                                tags = {artist.tags}
                                tagsState = {this.state}
                                handleClick = {this.handleClick}
                                //bgColor = {this.props.bgColor}
                            />)
                 })}
            </section>
            </div>
        )

    }
}

export default ArtistFilter