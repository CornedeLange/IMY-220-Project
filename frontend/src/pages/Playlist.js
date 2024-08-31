import React from "react";

class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playlist: null
        };
    }

    render(){
        return (
            <div>
                Playlist
            </div>
        );
    }
}

export default Playlist;