import React from "react";
import "../styles/CreatePlaylist.css";

class CreatePlaylist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playlistName: "",
            genre: "",
            description: "",
            //coverImage: null,
            coverImage: "",
            hashtags: "",
            songs: [],
            userId: localStorage.getItem("userId"),
            successMessage: "",
            errorMessage: "",
        };
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { playlistName, genre, description, coverImage, hashtags, userId } = this.state;
        // console.log({
        //     playlistName,
        //     genre,
        //     description,
        //     coverImage,
        //     hashtags: hashtags.split(",").map(tag => tag.trim()), // Convert hashtags to an array
        //     // songs
        //     userId,

        // });
        // const formData = new FormData();
        // formData.append("playlistName", playlistName);
        // formData.append("genre", genre);
        // formData.append("description", description);
        // formData.append("coverImage", coverImage);
        // formData.append("hashtags", hashtags.split(",").map(tag => tag.trim()));
        // formData.append("userId", userId);

        try{
            const response = await fetch('/createPlaylist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playlistName,
                    genre,
                    description,
                    coverImage,
                    hashtags: hashtags.split(",").map(tag => tag.trim()), // Convert hashtags to an array
                    // songs
                    userId,
                }),
               // body: formData,
            });

            if(response.ok){
                const data = await response.json();
                if(data.message == "Playlist created successfully")
                {
                    console.log(data);
                    this.setState({
                        successMessage: "Playlist created successfully",
                        errorMessage: "",
                    });
                    setTimeout(() => {
                        this.setState({ successMessage: "" });
                    }, 3000);
        
                    // Clear form fields
                    this.setState({
                        playlistName: "",
                        genre: "",
                        description: "",
                        coverImage: "",
                        hashtags: "",
                        songs: [],
                        userId: localStorage.getItem("userId"),
        
                    });
                }
                else{
                    this.setState({
                        successMessage: "",
                        errorMessage: "Failed to create playlist, Please try again",
                    });
                    setTimeout(() => {
                        this.setState({ errorMessage: "" });
                    }, 3000);
                }
                
            }
            else{
                const errorData = await response.json();
                this.setState({
                    successMessage: "",
                    errorMessage: errorData.message || "Failed to create playlist, Please try again",
                });
                setTimeout(() => {
                    this.setState({ errorMessage: "" });
                }, 3000);
            }

        }
        catch(error){
            console.error(error);
            this.setState({
                successMessage: "",
                errorMessage: "Failed to create playlist, Please try again",
            });
            setTimeout(() => {
                this.setState({ errorMessage: "" });
                }, 3000);
        }

        
    };

    render() {
        const { playlistName, genre, description, coverImage, hashtags, successMessage, errorMessage } = this.state;
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
                    {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </form>
            </div>
        );
    }
}

export default CreatePlaylist;