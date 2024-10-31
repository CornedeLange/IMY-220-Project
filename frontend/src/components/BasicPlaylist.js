import React, {useState} from 'react';
import Song from './Song'; 
import AddSongToPlaylist from "./AddSongToPlaylist";
import "../styles/Playlist.css";

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

            const userId = localStorage.getItem("userId");
            fetch(`/api/users/saved-playlists?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                const isSaved = data.includes(playlist.playlistId);
                this.setState({ isSaved });
            })
            .catch((error) => console.error(error));
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

          handleSavePlaylist = async () => {
                const {playlist} = this.props;
                const userId = localStorage.getItem("userId");
                try{
                    const response = await fetch(`/api/users/save-playlist`,{
                        method: 'PUT',
                        headers : {'Content-Type': 'application/json'},
                        body: JSON.stringify({userId, playlistId: playlist.playlistId}),
                    });
                    const data = await response.json();
                    this.setState({isSaved: true});
                }
                catch(error){
                    console.error(error);
                }

          };

    render() {
        const { playlist, owner } = this.props;
        const { showAddSong, isSaved , songs} = this.state;
        const userId = localStorage.getItem("userId");
        const isUserPlaylist = userId === owner;

        //console.log("IMAGE FOR PLAYLIST: ", playlist.coverImage);
        //console log song dateAdded
        // console.log("SONG DATE ADDED: ", this.state.songs.map(song => song.dateAdded));

        return (
            <div className="playlist-info-and-songs">
                <div className="basic-playlist-info">
                    <div className="playlist-image-and-info">
                        <h1>{playlist.name}</h1>
                        <img src={playlist.coverImage} alt={playlist.name} />
                        <h1>{playlist.description}</h1>
                        {/* <p>Total Songs: {playlist.numSongs}</p> */}
                        <h2>Genre: {playlist.genre}</h2>
                        <h3>Total Songs: {songs.length}</h3>
                        <div className='hastags-in-ptofile'>
                            {/* {playlist.hashtags.map(hashtag => (
                                <span className="hashtags-playlist" key={hashtag}>{hashtag}</span>
                            ))} */}
                            {Array.isArray(playlist.hashtags) ? playlist.hashtags.map((hashtag, index) => (
                                <span className="hashtags-playlist" key={index}>{hashtag}</span>
                            )) : playlist.hashtags.split(",").map((hashtag, index) => (
                                <span className="hashtags-playlist" key={index}>{hashtag}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className='basic-playlist-buttons'>
                        {isUserPlaylist ? (
                            <button onClick={this.handleAddSongToggle}>
                                {showAddSong ? "Cancel" : "Add Song"}
                            </button>
                            
                        ) : (
                            // <button disabled={isSaved} onClick={() => this.setState({ isSaved: true })}>
                            <button disabled={isSaved} onClick={this.handleSavePlaylist}>
                                {isSaved ? "Saved" : "Save Playlist"}
                            </button>
                        )}
                        {showAddSong && <AddSongToPlaylist playlistId={playlist.playlistId} />}
                    </div>
                    {/* {showAddSong && <AddSongToPlaylist playlistId={playlist.playlistId} />} */}
                </div>
                <div>
                    <h2>Songs</h2>
                    {/* {playlist.songs.map(song => (
                        //<Song key={song.songId} {...song} />
                        <Song key={song.songId} name={song.name} artist={song.artist} addedBy={song.addedBy} link={song.link} dateAdded={song.dateAdded} />
                    ))} */}
                    {this.state.songs.map((song, index) => (
                    //     console.log("SONG DATE ADDED: ", song.dateAdded, "Song name: ", song.name),
                    //    song.datAdded && ( <Song key={song.songId || index} currentUser={userId} name={song.name} addedBy={song.addedBy} artist={song.artist} link={song.link} dateAdded={song.dateAdded} onDelete={song.songId ? () => this.handleDeleteSong(song.songId) : null}/>
                    // )
                    <Song key={song.songId || index} currentUser={userId} name={song.name} addedBy={song.addedBy} artist={song.artist} link={song.link} dateAdded={song.dateAdded} onDelete={song.songId ? () => this.handleDeleteSong(song.songId) : null}/>
                        ))}
                </div>
            </div>
        );
    }
}

export default BasicPlaylist;