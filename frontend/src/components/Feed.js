import React from "react";
import Song from "./Song";
import PlaylistPreview from "./PlaylistPreview";
import AddSongToWebsite from "./AddSongToWebsite";
import ProfilePreview from "./ProfilePreview";
import { Link } from "react-router-dom";
import "../styles/Feed.css";


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddSong: false,
      songs: [],
      playlists: [],
      currentHashtag: null,
      currentUser: localStorage.getItem("userId"),
      isAdmin: false,
    };
    
    this.AddSong = this.AddSong.bind(this);
    this.onHashtagClick = this.onHashtagClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchSongs();
    this.fetchPlaylists();
  }

  //Show Add Song to webiste component
  AddSong = () => {
    this.setState({ showAddSong: !this.state.showAddSong });
  };

  handleDelete = (songName) =>{
    this.setState({
      songs: this.state.songs.filter((song) => song.songName !== songName),
    });

    // this.setState({
    //   songs: this.state.songs.map((song) =>
    //     song.songName === songName ? { ...song, deleted: true } : song
    //   ),
    // });
  };

  onHashtagClick = (hashtag) => {
    console.log(`Searching playlists for hashtag: ${hashtag}`);
    this.setState({ currentHashtag: hashtag });
  }

  async fetchSongs(){
    try{
      const response = await fetch("/songs");
      const data = await response.json();
      //debug
      console.log("Songs", data);
      this.setState({songs: data});
    }
    catch(error){
      console.error(error);
    }
  }

  async fetchPlaylists(){
    try{
      const response = await fetch("/playlists");
      const data = await response.json();
      //debug
      console.log("Playlists", data);
      this.setState({playlists: data});
    }
    catch(error){
      console.error(error);
    }
  }

  handleAddSong = (song) => {
    // Update the song list
    this.setState({
      songs: [...this.state.songs, song],
    });
  };

  render() {
    // const filteredPlaylists = this.state.playlists.filter(playlist =>
    //   playlist.playlistName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    // );

    // const filteredSongs = this.state.songs.filter(song =>
    //   song.songName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    // );

    return (
      <div className="feed-container">

        <div className="feed" >
          <div className="song-feed"  >
            <h2>Songs</h2>
            <button onClick={this.AddSong}>
              {/* Add Song  */}
              {this.state.showAddSong ? "Close" : "Add Song"}
              </button>
           
            {this.state.showAddSong ? <AddSongToWebsite onAddSong={this.handleAddSong}/> : null} 

            <div className="songs-list">

                  {this.state.songs.map((song, index) => (
                      <Song key={index} name={song.name} artist={song.artist} link={song.link} dateAdded={song.dateAdded} currentUser={this.state.currentUser} isAdmin={this.state.isAdmin} onDelete={() => this.handleDelete(song.songName)} />
              ))}
            </div>
            
          </div>
          <div className="playlist-feed">
            <h2>Playlists</h2>
            <div className="playlist-grid">
              {this.state.playlists.map((playlist, index) => (
                // <PlaylistPreview key={index} {...playlist} onHashtagClick={this.onHashtagClick} />
                <PlaylistPreview key={index} playlistName={playlist.name} description={playlist.description} numSongs={playlist.numSongs} coverImage={playlist.coverImage} hashtags={playlist.hashtags} playlistId={playlist.playlistId} onHashtagClick={this.onHashtagClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
