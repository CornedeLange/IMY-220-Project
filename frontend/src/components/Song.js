import React from "react";
import "../styles/Song.css";

class Song extends React.Component {
    // Auto-generate dateAdded if not provided
    // componentDidMount() {
    //     if (!this.props.dateAdded) {
    //         this.props.onDateAdded(new Date().toISOString());
    //     }
    // }

    // // Function to get the embed link from a Spotify URL
    // getSpotifyEmbedLink(url) {
    //     const match = url.match(/track\/([a-zA-Z0-9]+)/);
    //     return match ? `https://open.spotify.com/embed/track/${match[1]}` : null;
    // }

    render(){
        // const spotifyEmbedLink = this.getSpotifyEmbedLink(this.props.link);
        const { currentUser, addedBy, isAdmin } = this.props; // Destructuring props
        return (
            // <div className="song" >
            //     <div className="name-artist">
            //         <h3>{this.props.name}</h3>
            //         <p>{this.props.artist}</p>
            //     </div>
                
            //     <div className="song-info">
            //     {/* {spotifyEmbedLink ? (
            //             <iframe src={spotifyEmbedLink} width="300" height="80" frameBorder="0"  allow="encrypted-media" title="Spotify Player" />) : (
            //             <p>Invalid Spotify link</p>
            //         )}
            //         <p>Added on: {this.props.dateAdded}</p> */}
            //         <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            //             {this.props.link}
            //         </a>
            //         <p>{this.props.dateAdded}</p>
            //         {(currentUser === addedBy || isAdmin) && (
            //         <button onClick={this.props.onDelete} className="delete-button">Delete Song</button>
            //     )}
            //     </div>
            // </div>

            <div className="song">
                <div className="song-details">
                    <div className="name-artist">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.artist}</p>
                    </div>
                    
                    <div className="song-info">
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                            {this.props.link}
                        </a>
                        <p>{this.props.dateAdded}</p>

                        {currentUser === addedBy || isAdmin ? (
                            <button onClick={this.props.onDelete} className="delete-button">
                                Delete Song
                            </button>
                        ) : (
                            <span className="delete-button-placeholder"></span>  
                        )}

                    </div>
                </div>
            </div>
        );
    }
}

export default Song;