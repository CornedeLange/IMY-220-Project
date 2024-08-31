import React from "react";

class Song extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         song: null
    //     };
    // }

    // componentDidMount() {
    //     fetch("/api/song")
    //         .then(res => res.json())
    //         .then(song => this.setState({ song }));
    // }

    render(){
        return (
            <div className="song">
                <h3>{this.props.name}</h3>
                <p>{this.props.author}</p>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    {this.props.link}
                </a>
                <p>{this.props.dateAdded}</p>

                {/* //<Song name="test" author="somebody" link="someLink" dateAdded="date" */}
            </div>
        );
    }
}

export default Song;