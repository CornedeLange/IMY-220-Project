import React from "react";

class AddSongToPlayList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            song: null
        };
    }

    render(){
        return (
            <div>
                Add Song To Playlist
            </div>
        );
    }
}