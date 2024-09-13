import React from "react";
import { Link } from "react-router-dom";
import "../styles/PlaylistPreview.css"

class PlaylistPreview extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         playlist: null
    //     };
    // }

    renderHashTags(){
        return this.props.hashtags.map((tag, index)=>(
            <span key={index} className="hashtag" onClick={() => this.props.onHashtagClick(tag)}>
                    {tag}
            </span>
        ));
    }

    render(){
        const { playlistName, description, numSongs, coverImage, hashtags } = this.props;
        return (
            <div className="playlist-preview">
                
                <img src={coverImage} alt={`${playlistName} cover`} className="cover-image" />
                <h3>{playlistName}</h3>
                <p>{description}</p>
                <p>{numSongs} songs</p>
                {/* maybe render hashtags as clickable links */}
                <div className="hashtags">
                    {this.renderHashTags()}
                    </div>
                <Link to="/playlist/:playlistId">View Playlist</Link>
            </div>
        );
    }
}

export default PlaylistPreview;