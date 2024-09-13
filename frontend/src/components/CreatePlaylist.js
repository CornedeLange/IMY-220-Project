import React from "react";
import "../styles/CreatePlaylist.css";

class CreatePlaylist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playlistName: "",
            genre: "",
            description: "",
            coverImage: "",
            hashtags: "",
            songs: []
        };
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { playlistName, genre, description, coverImage, hashtags, songs } = this.state;
        console.log({
            playlistName,
            genre,
            description,
            coverImage,
            hashtags: hashtags.split(",").map(tag => tag.trim()), // Convert hashtags to an array
            // songs

        });
        // Clear form fields
        this.setState({
            playlistName: "",
            genre: "",
            description: "",
            coverImage: "",
            hashtags: "",
            songs: []
        });
    };

    render() {
        const { playlistName, genre, description, coverImage, hashtags, songs } = this.state;
        // Dummy genres for dropdown
        const genres = ["Pop", "Rock", "Hip Hop", "Jazz", "Metal", "Classical"];

        return (
            <div className="create-playlist-container">
                <h1>Create Playlist</h1>
                <form onSubmit={this.handleSubmit} className="create-playlist-form">
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input
                        type="text"
                        id="playlistName"
                        name="playlistName"
                        value={playlistName}
                        onChange={this.handleInputChange}
                        required
                    />

                    <label htmlFor="genre">Genre</label>
                    <select
                        id="genre"
                        name="genre"
                        value={genre}
                        onChange={this.handleInputChange}
                        required
                    >
                        <option value="">Select a genre</option>
                        {genres.map((g, index) => (
                            <option key={index} value={g}>{g}</option>
                        ))}
                    </select>

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={this.handleInputChange}
                    />

                    <label htmlFor="coverImage">Cover Image URL</label>
                    <input
                        type="file"
                        id="coverImage"
                        name="coverImage"
                        value={coverImage}
                        onChange={this.handleInputChange}
                    />

                    <label htmlFor="hashtags">Hashtags (comma separated)</label>
                    <input
                        type="text"
                        id="hashtags"
                        name="hashtags"
                        value={hashtags}
                        onChange={this.handleInputChange}
                    />

                    {/* <label htmlFor="songs">Add Songs (to be implemented)</label>
                    <input
                        type="text"
                        id="songs"
                        name="songs"
                        value={songs.join(", ")}
                        readOnly
                    /> */}
                    {/* TODO: Implement functionality to add songs to the playlist */}

                    <button type="submit">Create Playlist</button>
                </form>
            </div>
        );
    }
}

export default CreatePlaylist;