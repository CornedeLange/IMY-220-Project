import React from "react";

class PlaylistPreview extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            playlist: null
        };
    }

    render(){
        return (
            <div>
                Playlist Preview
            </div>
        );
    }
}