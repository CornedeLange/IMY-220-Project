import React from "react";
import "../styles/Song.css";

class Song extends React.Component {
    getSpotifyEmbedLink(url) {
        const match = url.match(/(?:track\/|spotify:track:)([a-zA-Z0-9]+)/);
        if (match) {
        const trackId = match[1];
        return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
        } else {
        //console.error("Invalid Spotify URL:", url);
        return null;
        }
    }

    render(){
        // const spotifyEmbedLink = this.getSpotifyEmbedLink(this.props.link);
        const { currentUser, addedBy, isAdmin, onDelete } = this.props; // Destructuring props
        const idFromLocalStorage = localStorage.getItem('userId');
        const isAddedByUser = addedBy === idFromLocalStorage;
        const spotifyEmbedLink = this.getSpotifyEmbedLink(this.props.link);

        // https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn?si=27dQI5y8Ryi9ea7Mz65awA
                            //ABOVE EXAMPLE OF LINK COPY FROM SPOTIFY (THIS ONE IS GODS PLAN FROM DRAKE)
                            {/* <iframe  src="https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

        return (
            <div className="song">
                <div className="song-details">
                    <div className="name-artist">
                    
                        <h3>{this.props.name}</h3>
                        <p>{this.props.artist}</p>
                        {this.props.dateAdded && <p>{this.props.dateAdded.split('T')[0]}</p>}
                        {((currentUser === addedBy) && onDelete) || isAdmin ? (
                            <button onClick={onDelete} className="delete-button">
                                {/* Delete Song */}
                                Delete
                            </button>
                        ) : (
                            <span className="delete-button-placeholder"></span>  
                        )}
                    </div>
                    
                    <div className="song-info">
                        {/* <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="song-link">
                            {this.props.link}
                        </a> */}
                        {spotifyEmbedLink ? (
                            
                            <iframe
                                src={spotifyEmbedLink}
                                width="100%"
                                height="150"
                                frameBorder="0"
                                allowFullScreen=""
                                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                title={`Spotify embed for ${this.props.name}`}
                            ></iframe>
                        ) : (
                            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="song-link">
                                {this.props.link}
                            </a>
                        )}
                        {/* <p>{this.props.dateAdded.split('T')[0]}</p> */}
                        {/* <p>{this.props.dateAdded}</p> */}
                        {/* {this.props.dateAdded && <p>{this.props.dateAdded.split('T')[0]}</p>} */}
                        

                        {/* {((currentUser === addedBy) && onDelete) || isAdmin ? (
                            <button onClick={onDelete} className="delete-button">
                               
                                Delete
                            </button>
                        ) : (
                            <span className="delete-button-placeholder"></span>  
                        )} */}

                    </div>
                </div>
            </div>
        );
    }
}

export default Song;