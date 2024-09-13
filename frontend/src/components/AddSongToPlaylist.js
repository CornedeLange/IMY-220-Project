import React from "react";
import "../styles/AddSongToPlaylist.css";

class AddSongToPlayList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // selectedPlaylist: "",
            // selectedSong: "",
            //dummy data:
            // playLists: ["playlist 1", "playlist 2", "playlist 3"]

            name: "",
            artist: "",
            link: "",
            playlistId: ""
        };
    }

    handleChange = (event) => {
        // this.setState({ selectedPlaylist: event.target.value});
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newSong = {
            name: this.state.name,
            artist: this.state.artist,
            link: this.state.link,
            playlistId: this.state.playlistId
        };

        console.log(newSong);
        
        //NEED TO IMPLEMENT TO ACTUALLY ADD SONG HERE

        //clear form.state values
        this.setState({name: "", artist: "", link: "", playlistId: ""});

    };

    render(){
        return (
            <div className="add-to-playlist">
                <h1>Add Song To Playlist</h1>
                <form onSubmit={this.handleSubmit} className="add-song-to-playlist-form">
                    {/* <label htmlFor="playlist">
                        Select PlayList:
                        <select id="playlist" name="playlist" value={this.state.selectedPlaylist} onChange={this.handleChange} required>
                            <option value="" disabled>Select Playlist</option>
                            {this.state.playLists.map((playlist, index) => (
                                <option key={index} value={playlist}>{playlist}</option>
                            ))}
                        </select>
                       
                    </label> */}

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                
                    <label htmlFor="author">Artist:</label>
                    <input type="text" id="artist" name="artist" value={this.state.artist} onChange={this.handleChange} required />
                
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" value={this.state.link} onChange={this.handleChange} required />

                    <button type="submit">Add to Playlist</button>
                </form>
            </div>
        );
    }
}

export default AddSongToPlayList;