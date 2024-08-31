import React from "react";

class AddSongToWebsite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            song: null
        };
    }

    render(){
        return (
            <div>
                Add Song to Website
            </div>
        );
    }
}

export default AddSongToWebsite;