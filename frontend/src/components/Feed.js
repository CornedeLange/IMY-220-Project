import React from "react";

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            song: null
        };
    }

    render(){
        return (
            <div>
                Feed
            </div>
        );
    }
}

export default Feed;