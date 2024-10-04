import React, {useState} from 'react';
import Song from './Song'; 
import AddSongToPlaylist from "./AddSongToPlaylist";
import "../styles/Playlist.css";

//make class component
class BasicPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddSong: false,
            isSaved: false,
            songs: [],
        };
    }

    handleAddSongToggle = () => {
        this.setState({ showAddSong: !this.state.showAddSong });
    };

    componentDidMount(){
        const {playlist} = this.props;
        // playlist.songs.forEach((song) => {
        //     fetch(`/api/songs/${song.songId}`) 
        //       .then((response) => response.json())
        //       .then((data) => {
        //         this.setState((prevState) => ({
        //           songs: [...prevState.songs, data],
        //         }));
        //       })
        //       .catch((error) => console.error(error));
        //   });
        playlist.songs.forEach((song) => {
            if (song.songId) {
                // Fetch the song details from the API if songId is present
                fetch(`/api/songs/${song.songId}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Song not found");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        this.setState((prevState) => ({
                            songs: [...prevState.songs, data],
                        }));
                    })
                    .catch((error) => console.error(error.message));
            } else {
                // If songId is missing, add the song directly
                this.setState((prevState) => ({
                    songs: [...prevState.songs, song], // Directly add the song object without fetching
                }));
            }
        });
        }

        handleDeleteSong = (songId) => {
            const { playlist } = this.props;
            const playlistId = playlist.playlistId;
        
            fetch(`/api/playlists/${playlistId}/songs/${songId}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => {
                this.setState((prevState) => ({
                  songs: prevState.songs.filter((song) => song.songId !== songId),
                }));
              })
              .catch((error) => console.error(error));
          };

        

    render() {
        const { playlist, owner } = this.props;
        const { showAddSong, isSaved } = this.state;
        const userId = localStorage.getItem("userId");
        const isUserPlaylist = userId === owner;

        return (
            <div>
                <div className="basic-playlist-info">
                    <div className="playlist-image-and-info">
                        <h1>{playlist.name}</h1>
                        <img src={playlist.coverImage} alt={playlist.name} />
                        <p>{playlist.description}</p>
                        <div className='hastags-in-ptofile'>
                            {playlist.hashtags.map(hashtag => (
                                <span className="hashtags-playlist" key={hashtag}>{hashtag}</span>
                            ))}
                        </div>
                        <p>Total Songs: {playlist.numSongs}</p>
                    </div>
                    <div className='basic-playlist-buttons'>
                        {isUserPlaylist ? (
                            <button onClick={this.handleAddSongToggle}>
                                {showAddSong ? "Cancel" : "Add Song"}
                            </button>
                        ) : (
                            <button disabled={isSaved} onClick={() => this.setState({ isSaved: true })}>
                                {isSaved ? "Saved" : "Save Playlist"}
                            </button>
                        )}
                    </div>
                    {showAddSong && <AddSongToPlaylist playlistId={playlist.playlistId} />}
                </div>
                <div>
                    <h2>Songs</h2>
                    {/* {playlist.songs.map(song => (
                        //<Song key={song.songId} {...song} />
                        <Song key={song.songId} name={song.name} artist={song.artist} addedBy={song.addedBy} link={song.link} dateAdded={song.dateAdded} />
                    ))} */}
                    {this.state.songs.map((song, index) => (
                        <Song key={song.songId || index} currentUser={userId} name={song.name} addedBy={song.addedBy} artist={song.artist} link={song.link} dateAdded={song.dateAdded} onDelete={song.songId ? () => this.handleDeleteSong(song.songId) : null}/>
                        ))}
                </div>
            </div>
        );
    }
}

export default BasicPlaylist;