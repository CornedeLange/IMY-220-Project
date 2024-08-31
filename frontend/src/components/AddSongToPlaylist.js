import React from "react";

class AddSongToPlayList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedPlaylist: "",
            selectedSong: "",
            //dummy data:
            playLists: ["playlist 1", "playlist 2", "playlist 3"]
        };
    }

    handleChange = (event) => {
        this.setState({ selectedPlaylist: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Add Song ${this.props.songName} to playlist ${this.state.selectedPlaylist}`);
        //NEED TO IMPLEMENT TO ACTUALLY ADD SONG HERE
    };

    render(){
        return (
            <div className="add-to-playlist">
                <h1>Add Song To Playlist</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="playlist">
                        Select PlayList:
                        <select id="playlist" name="playlist" value={this.state.selectedPlaylist} onChange={this.handleChange} required>
                            <option value="" disabled>Select Playlist</option>
                            {this.state.playLists.map((playlist, index) => (
                                <option key={index} value={playlist}>{playlist}</option>
                            ))}
                        </select>
                        <button type="submit">Add to Playlist</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default AddSongToPlayList;