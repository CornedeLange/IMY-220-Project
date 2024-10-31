import React from "react";
import Navigation from "../components/Navigation";
import PlaylistPreview from "../components/PlaylistPreview";
import ProfilePreview from "../components/ProfilePreview";
import Song from "../components/Song";
import SearchInput from "../components/SearchInput";
import "../styles/Explore.css";

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

        //HANDLE HASHTAG-CLICK SEARCH
        handleHashtagClick = (hashtag) => {
            this.setState({
                searchTerm: hashtag
            });
        } 

        //HANDLE HASHTAG SEARCH
        handleHashtagSearch = (hashtag) => {
            this.setState({
                searchTerm: hashtag
            });
        }

        

    render(){

        const { searchTerm, songs, profiles, playlists } = this.state;
        const currentUserId = localStorage.getItem("userId");

        // Filter data based on search term
        const filteredSongs = songs.filter((song) =>
          song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
    
        const filteredProfiles = profiles.filter((profile) =>
          profile.username.toLowerCase().includes(searchTerm.toLowerCase()) && 
          profile.userId !== currentUserId 
          &&
          !profile.friends.includes(currentUserId)
        );
    
        const filteredPlaylists = playlists.filter((playlist) =>
          (playlist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        playlist.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          playlist.hashtags.some((hashtag) => hashtag.toLowerCase().includes(searchTerm.toLowerCase())) ) &&
          playlist.createdBy !== currentUserId
          
          //convert hashtags to array if not array
  //         Array.isArray(playlist.hashtags) ? 
  // Array.from(playlist.hashtags).map((hashtag) => hashtag.toLowerCase()).includes(searchTerm.toLowerCase()) : 
  // [playlist.hashtags].map((hashtag) => hashtag.toLowerCase()).includes(searchTerm.toLowerCase())
        );


         //Elimanate duplicates in songs
         const eliminateDuplicatesByName =(songs) => {
          const uniqueSongs = [];
          const uniqueSongNames = [];
          songs.forEach((song) => {
              if(!uniqueSongNames.includes(song.name)){
                  uniqueSongNames.push(song.name);
                  uniqueSongs.push(song);
              }
          });
          return uniqueSongs;
      }
        ///CHANGE MAYBE TO AVOID DUPLICATES SONGS IN EXPLORE************************
        // Limit the number of items displayed
        const maxItems = 10;
        const uniqueFilteredSongs = eliminateDuplicatesByName(filteredSongs);
        // const limitedSongs = Array.from(new Set(filteredSongs.map((song) => song.link)))
        //     .map((link) => filteredSongs.find((song) => song.link === link))
        //     .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        //     .slice(0, maxItems);
        const limitedSongs = uniqueFilteredSongs.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, maxItems);

       

        const limitedProfiles = filteredProfiles.slice(0, maxItems);
        const limitedPlaylists = filteredPlaylists.slice(0, maxItems);


    return (
        <div>
          <Navigation />
          <div className="explore-container">
            <SearchInput onSearch={this.handleSearch} onHashtagSearch={this.handleHashtagSearch} />
            <div className="explore-content">
              <h1>Explore</h1>

              {/* Explore Playlists */}
              <div className="explore-section">
                <h2>Explore Playlists</h2>
                {/* {filteredPlaylists.length === 0 ? ( */}
                {limitedPlaylists.length === 0 ? (
                  <p className="no-songs-playlist-profile">No playlists match the search term "{searchTerm}"</p>
                ) : (
                  <div className="explore-grid explore-playlist-grid">
                    {/* {filteredPlaylists.map((playlist, index) => ( */}
                    {limitedPlaylists.map((playlist, index) => (
                      <PlaylistPreview
                        key={index}
                        playlistName={playlist.name}
                        description={playlist.description}
                        numSongs={playlist.numSongs}
                        coverImage={playlist.coverImage}
                        hashtags={playlist.hashtags}
                        playlistId={playlist.playlistId}
                        onHashtagClick={this.handleHashtagClick}
                        genre={playlist.genre}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Explore Profiles */}
              <div className="explore-section">
                <h2>Explore New People</h2>
                {/* {filteredProfiles.length === 0 ? ( */}
                {limitedProfiles.length === 0 ? (
                  <p className="no-songs-playlist-profile">No profiles match the search term "{searchTerm}"</p>
                ) : (
                  <div className="explore-grid explore-profile-grid">
                    {/* {filteredProfiles.map((profile, index) => ( */}
                    {limitedProfiles.map((profile, index) => (
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
                {/* {filteredSongs.length === 0 ? ( */}
                {limitedSongs.length === 0 ? (
                  <p className="no-songs-playlist-profile">No songs match the search term "{searchTerm}"</p>
                ) : (
                  <div className="explore-grid explore-songs-grid">
                    {/* {filteredSongs.map((song, index) => (
                      <Song
                        key={index}
                        name={song.name}
                        artist={song.artist}
                        link={song.link}
                        dateAdded={song.dateAdded}
                        addedBy={song.addedBy}
                      /> */}
                      {/* Do not display duplicates (songs with the same link) */}
                      {/* {Array.from(new Set(filteredSongs.map((song) => song.link))
                      .map((link) => filteredSongs.find((song) => song.link === link))
                      .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
                      .map((song, index) => (
                        <Song
                          key={index}
                          name={song.name}
                          artist={song.artist}
                          link={song.link}
                          dateAdded={song.dateAdded}
                          addedBy={song.addedBy}
                        /> */}
                        {/* *********************** */}
                        {/* {Array.from(new Set(filteredSongs.map((song) => song.link)))
                        .map((link) => filteredSongs.find((song) => song.link === link))
                        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
                        .map((song, index) => (
                          <Song
                            key={index}
                            name={song.name}
                            artist={song.artist}
                            link={song.link}
                            dateAdded={song.dateAdded}
                            addedBy={song.addedBy}
                          />
                        ))} */}
                        {limitedSongs.map((song, index) => (
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