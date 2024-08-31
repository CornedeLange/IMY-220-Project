import React from "react";

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: null
        };
    }

    // componentDidMount() {
    //     fetch("/api/song")
    //         .then(res => res.json())
    //         .then(song => this.setState({ song }));
    // }

    render(){
        return (
            <div>
                Song
            </div>
        );
    }
}

export default Song;