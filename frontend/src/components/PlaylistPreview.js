import React from "react";

class PlaylistPreview extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         playlist: null
    //     };
    // }

    render(){
        const { playlistName, description, numSongs, coverImage } = this.props;
        return (
            <div className="playlist-preview">
                <img src={coverImage} alt={`${playlistName} cover`} className="cover-image" />
                <h3>{playlistName}</h3>
                <p>{description}</p>
                <p>{numSongs} songs</p>
            </div>
        );
    }
}

export default PlaylistPreview;