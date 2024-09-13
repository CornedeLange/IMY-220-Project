import React from "react";
import Navigation from "../components/Navigation";
import PlaylistPreview from "../components/PlaylistPreview";
import ProfilePreview from "../components/ProfilePreview";
import Song from "../components/Song";
import SearchInput from "../components/SearchInput";
import "../styles/Explore.css";

//json dummy data for songs
const songs = [
    // {songName: "Song Name 1",artist: "Artist 1",link: "https://link1",dateAdded: "2024/01/01",},
    // {songName: "Song name 1", artits: "Artist3", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123", currentUser:"user123", isAdmin: false, onDelete: handleDelete},
    {songName: "Song name 1", artist: "Artist1", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123"},
    {songName: "Song name 2", artist: "Artist2", link: "https://link2",dateAdded: "2024/01/01", addedBy:"user456"},
    {songName: "Song name 3", artist: "Artist3", link: "https://link3",dateAdded: "2024/01/01", addedBy:"user123"},
    {songName: "Song name 4", artist: "Artist4", link: "https://link4",dateAdded: "2024/01/01", addedBy:"user444"},
    {songName: "Song name 5", artist: "Artist5", link: "https://link5",dateAdded: "2024/01/01", addedBy:"user444"},
    {songName: "Song name 6", artist: "Artist6", link: "https://link6",dateAdded: "2024/01/01", addedBy:"user123"},
  
    // {songName: "Song Name 2",artist: "Artist 3",link: "https://link2",dateAdded: "2024/01/01",},
    // {songName: "Song Name 3",artist: "Artist 4",link: "https://link3",dateAdded: "2024/01/01",},
    // {songName: "Song Name 4",artist: "Artist 5",link: "https://link4",dateAdded: "2024/01/01",},
    // {songName: "Song Name 5",artist: "Artist 6",link: "https://link5",dateAdded: "2024/01/01",},
    // {songName: "Song Name 6",artist: "Artist 2",link: "https://link6",dateAdded: "2024/01/01",},
  ];
  
  //json dummie dat for PlaylistPreview atleast 3
  const playlist = [
    // {playlistName: "Playlist Name 1",description: "Description 1",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 2",description: "Description 2",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 3",description: "Description 3",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 4",description: "Description 4",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 5",description: "Description 5",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 6",description: "Description 6",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 7",description: "Description 7",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 8",description: "Description 8",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 9",description: "Description 9",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
    // {playlistName: "Playlist Name 10",description: "Description 10",numSongs: "10",coverImage: "https://via.placeholder.com/150",},
  
    {playlistName: "Playlist Name 1", description: "Description 1", numSongs: "10", coverImage: "https://via.placeholder.com/150", hashtags: ["#rock", "#summer"]},
    {playlistName: "Playlist Name 2", description: "A very very long description...", numSongs: "20", coverImage: "https://via.placeholder.com/150", hashtags: ["#chill", "#focus"]},
    {playlistName: "Playlist Name 3", description: "Description 3", numSongs: "0", coverImage: "https://via.placeholder.com/150", hashtags: ["#pop"]},
    {playlistName: "Playlist Name 4", description: "Description 4", numSongs: "5", coverImage: "https://via.placeholder.com/150", hashtags: ["#party", "#goodvibes"]},
    {playlistName: "Playlist Name 5", description: "Description 5", numSongs: "7", coverImage: "https://via.placeholder.com/150", hashtags: ["#workout"]}
  
  ];
  
  //dummy json data for ProfilePreview
  const profiles = [
    //username, profilePicture, bio, numFollowers
    {username: "Username 1",profilePicture: "https://via.placeholder.com/150",bio: "Bio 1",numFollowers: "10",},
    {username: "Username 2",profilePicture: "https://via.placeholder.com/150",bio: "Bio 2",numFollowers: "10",},
    {username: "Username 3",profilePicture: "https://via.placeholder.com/150",bio: "Bio 3",numFollowers: "10",},
  ];

class Explore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            song: null
        };
    }

    render(){
        return (
            <div>
                <Navigation/>
                <div className="explore-container">
                
                <SearchInput/>
                {/* Explore, shows playlist, songs, other people*/}
                <div className="explore-content">
                    <h1>Explore</h1>
                    {/* <div className="explore-playlists">
                        <h2>Explore Playlists</h2>
                        <div className="explore-playlist-grid">
                            {playlist.map((playlist, index) => (
                               
                                <PlaylistPreview key={index} playlistName={playlist.playlistName} description={playlist.description} numSongs={playlist.numSongs} coverImage={playlist.coverImage} hashtags={playlist.hashtags} />
                            ))}
                        </div>
                    </div>
                    <div className="explore-profiles">
                        <h2>Explore new People</h2>
                        <div className="explore-profile-grid">
                            {profiles.map((profile, index) => (
                                <ProfilePreview key={index} username={profile.username} profilePicture={profile.profilePicture} bio={profile.bio} numFollowers={profile.numFollowers} />
                            ))}
                        </div>
                    </div>
                    <div className="explore-songs">
                        <h2>Explore Songs</h2>
                        <div className="explore-songs-grid">
                            {songs.map((song, index) => (
                            
                                <Song key={index} name={song.songName} artist={song.artist} link={song.link} dateAdded={song.dateAdded} addedBy={song.addedBy} />
                            ))}
                        </div>
                    </div> */}


                    {/* Explore Playlists */}
                    <div className="explore-section">
                        <h2>Explore Playlists</h2>
                        <div className="explore-grid explore-playlist-grid">
                            {playlist.map((playlist, index) => (
                                <PlaylistPreview
                                    key={index}
                                    playlistName={playlist.playlistName}
                                    description={playlist.description}
                                    numSongs={playlist.numSongs}
                                    coverImage={playlist.coverImage}
                                    hashtags={playlist.hashtags}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Explore Profiles */}
                    <div className="explore-section">
                        <h2>Explore New People</h2>
                        <div className="explore-grid explore-profile-grid">
                            {profiles.map((profile, index) => (
                                <ProfilePreview
                                    key={index}
                                    username={profile.username}
                                    profilePicture={profile.profilePicture}
                                    bio={profile.bio}
                                    numFollowers={profile.numFollowers}
                                    userId={profile.userId}  // assuming userId is available for linking
                                />
                            ))}
                        </div>
                    </div>

                    {/* Explore Songs */}
                    <div className="explore-section">
                        <h2>Explore Songs</h2>
                        <div className="explore-grid explore-songs-grid">
                            {songs.map((song, index) => (
                                <Song
                                    key={index}
                                    name={song.songName}
                                    artist={song.artist}
                                    link={song.link}
                                    dateAdded={song.dateAdded}
                                    addedBy={song.addedBy}
                                />
                            ))}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            
        );
    }
}

export default Explore;