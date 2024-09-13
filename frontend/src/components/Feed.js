import React from "react";
import Song from "./Song";
import PlaylistPreview from "./PlaylistPreview";
import AddSongToWebsite from "./AddSongToWebsite";
import ProfilePreview from "./ProfilePreview";
import { Link } from "react-router-dom";
import "../styles/Feed.css";

const songs = [
  // {songName: "Song Name 1",artist: "Artist 1",link: "https://link1",dateAdded: "2024/01/01",},
  // {songName: "Song name 1", artits: "Artist3", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123", currentUser:"user123", isAdmin: false, onDelete: handleDelete},
  {songName: "Song name 1", artist: "Artist1", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123"},
  {songName: "Song name 2", artist: "Artist2", link: "https://link2",dateAdded: "2024/01/01", addedBy:"user456"},
  {songName: "Song name 3", artist: "Artist3", link: "https://link3",dateAdded: "2024/01/01", addedBy:"user123"},
  {songName: "Song name 4", artist: "Artist4", link: "https://link4",dateAdded: "2024/01/01", addedBy:"user444"},
  {songName: "Song name 5", artist: "Artist5", link: "https://link5",dateAdded: "2024/01/01", addedBy:"user444"},
  {songName: "Song name 6", artist: "Artist6", link: "https://link6",dateAdded: "2024/01/01", addedBy:"user123"},

];

const playlist = [
  {playlistName: "Playlist Name 1", description: "Description 1", numSongs: "10", coverImage: "https://via.placeholder.com/150", hashtags: ["#rock", "#summer"]},
  {playlistName: "Playlist Name 2", description: "A very very long description...", numSongs: "20", coverImage: "https://via.placeholder.com/150", hashtags: ["#chill", "#focus"]},
  {playlistName: "Playlist Name 3", description: "Description 3", numSongs: "0", coverImage: "https://via.placeholder.com/150", hashtags: ["#pop"]},
  {playlistName: "Playlist Name 4", description: "Description 4", numSongs: "5", coverImage: "https://via.placeholder.com/150", hashtags: ["#party", "#goodvibes"]},
  {playlistName: "Playlist Name 5", description: "Description 5", numSongs: "7", coverImage: "https://via.placeholder.com/150", hashtags: ["#workout"]}
];

const profiles = [
  {username: "Username 1",profilePicture: "https://via.placeholder.com/150",bio: "Bio 1",numFollowers: "10",},
  {username: "Username 2",profilePicture: "https://via.placeholder.com/150",bio: "Bio 2",numFollowers: "10",},
  {username: "Username 3",profilePicture: "https://via.placeholder.com/150",bio: "Bio 3",numFollowers: "10",},
  {username: "Username 4",profilePicture: "https://via.placeholder.com/150",bio: "Bio 4",numFollowers: "10",},
  {username: "Username 5",profilePicture: "https://via.placeholder.com/150",bio: "Bio 5",numFollowers: "10",},
  {username: "Username 6",profilePicture: "https://via.placeholder.com/150",bio: "Bio 6",numFollowers: "10",},
];

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddSong: false,
      songs: songs,
      playlists: playlist,
      currentHashtag: null,
      currentUser: "user123",
      isAdmin: false,
    };
    
    this.AddSong = this.AddSong.bind(this);
    this.onHashtagClick = this.onHashtagClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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


  render() {
    const filteredPlaylists = this.state.playlists.filter(playlist =>
      playlist.playlistName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );

    const filteredSongs = this.state.songs.filter(song =>
      song.songName.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );

    return (
      <div className="feed-container">
        {/* <div className="profiles-section">
          <h1>Profiles</h1>
          <div className="profiles-view">
            {profiles.map((profile, index) => (
              <ProfilePreview key={index} username={profile.username} profilePicture={profile.profilePicture} bio={profile.bio} numFollowers={profile.numFollowers} />
            ))}
          </div>
          
        </div> */}
        <div className="feed" >
          <div className="song-feed"  >
            <h2>Songs</h2>
            <button onClick={this.AddSong}>Add Song </button>
           
            {this.state.showAddSong ? <AddSongToWebsite /> : null}
            <div className="songs-list">
              {/* {this.state.songs.map((song, index) => (
                <Song key={index} name={song.songName} artist={song.artist} link={song.link} dateAdded={song.dateAdded} addedBy={song.addedBy} currentUser={this.state.currentUser} isAdmin={this.state.isAdmin} onDelete={() => this.handleDelete(song.songName)} /> */}


               {/* {this.state.songs.filter(song => !song.deleted).map((song, index) => (
                <Song key={index} {...song} onDelete={() => this.handleDelete(song.songName)} />
                 ))} */}

                  {filteredSongs.map((song, index) => (
                      <Song key={index} name={song.songName} artist={song.artist} link={song.link} dateAdded={song.dateAdded} addedBy={song.addedBy} currentUser={this.state.currentUser} isAdmin={this.state.isAdmin} onDelete={() => this.handleDelete(song.songName)} />
              ))}
            </div>
            
          </div>
          <div className="playlist-feed">
            <h2>Playlists</h2>
            <div className="playlist-grid">
              {/* {this.state.playlists.map((playlist, index) => (
                <PlaylistPreview key={index} playlistName={playlist.playlistName} description={playlist.description} numSongs={playlist.numSongs} coverImage={playlist.coverImage} hashtags={playlist.hashtags} onHashtagClick={this.onHashtagClick} />
              ))} */}
              {filteredPlaylists.map((playlist, index) => (
                // <PlaylistPreview key={index} {...playlist} onHashtagClick={this.onHashtagClick} />
                <PlaylistPreview key={index} playlistName={playlist.playlistName} description={playlist.description} numSongs={playlist.numSongs} coverImage={playlist.coverImage} hashtags={playlist.hashtags} onHashtagClick={this.onHashtagClick} />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
