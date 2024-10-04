import React from "react";
import Navigation from "../components/Navigation";
import PlaylistPreview from "../components/PlaylistPreview";
import ProfilePreview from "../components/ProfilePreview";
import Song from "../components/Song";
import SearchInput from "../components/SearchInput";
import "../styles/Explore.css";

//json dummy data for songs

class Explore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songs:[],
            playlists:[],
            profiles:[],
            searchTerm: "",
        };

        this.handleSearch.state = this.handleSearch.bind(this);
    }

    componentDidMount(){
        this.fetchSongs();
        this.fetchPlaylists();
        this.fetchProfiles();
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

        async fetchProfiles(){
            try{
                const response = await fetch("/profiles");
                const data = await response.json();
                console.log("Profiles", data);
                this.setState({profiles: data});
            }
            catch(error){
                console.error(error);
            }
        }

        handleSearch = (searchTerm) => {
            console.log("Search Term: ", searchTerm);
            this.setState({
                searchTerm: searchTerm
            });
        }

    render(){
        //filter out profile that is not the current user
        // const userIdFromLocalStorage = localStorage.getItem("userId");
        // const filteredProfiles = this.state.profiles.filter(profile => profile.userId !== userIdFromLocalStorage);
        // this.setState({profiles: filteredProfiles});

        const { searchTerm, songs, profiles, playlists } = this.state;

        // Filter data based on search term
        const filteredSongs = songs.filter((song) =>
          song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        const filteredProfiles = profiles.filter((profile) =>
          profile.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        const filteredPlaylists = playlists.filter((playlist) =>
          playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
        );


    return (
        <div>
          <Navigation />
          <div className="explore-container">
            <SearchInput onSearch={this.handleSearch} />
            <div className="explore-content">
              <h1>Explore</h1>

              {/* Explore Playlists */}
              <div className="explore-section">
                <h2>Explore Playlists</h2>
                {filteredPlaylists.length === 0 ? (
                  <p className="no-songs-playlist-profile">No playlists match the search term "{searchTerm}"</p>
                ) : (
                  <div className="explore-grid explore-playlist-grid">
                    {filteredPlaylists.map((playlist, index) => (
                      <PlaylistPreview
                        key={index}
                        playlistName={playlist.name}
                        description={playlist.description}
                        numSongs={playlist.numSongs}
                        coverImage={playlist.coverImage}
                        hashtags={playlist.hashtags}
                        playlistId={playlist.playlistId}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Explore Profiles */}
              <div className="explore-section">
                <h2>Explore New People</h2>
                {filteredProfiles.length === 0 ? (
                  <p className="no-songs-playlist-profile">No profiles match the search term "{searchTerm}"</p>
                ) : (
                  <div className="explore-grid explore-profile-grid">
                    {filteredProfiles.map((profile, index) => (
                      <ProfilePreview
                        key={index}
                        username={profile.username}
                        profilePicture={profile.profilePicture}
                        bio={profile.bio}
                        numFollowers={profile.numFollowers}
                        userId={profile.userId}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Explore Songs */}
              <div className="explore-section">
                <h2>Explore Songs</h2>
                {filteredSongs.length === 0 ? (
                  <p className="no-songs-playlist-profile">No songs match the search term "{searchTerm}"</p>
                ) : (
                  <div className="explore-grid explore-songs-grid">
                    {filteredSongs.map((song, index) => (
                      <Song
                        key={index}
                        name={song.name}
                        artist={song.artist}
                        link={song.link}
                        dateAdded={song.dateAdded}
                        addedBy={song.addedBy}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Explore;