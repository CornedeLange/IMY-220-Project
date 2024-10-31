import React from "react";
import "../styles/AddSongToPlaylist.css";

class AddSongToPlayList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            artist: "",
            link: "",
            playlistId: props.playlistId,
            addedBy: localStorage.getItem("userId"),

            errors:{
                name: "",
                artist: "",
                link: "",
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValidSpotifyUrl = this.isValidSpotifyUrl.bind(this);
    }

    handleChange = (event) => {
       // this.setState({ [event.target.name]: event.target.value });
       const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
        case "name":
            errors.name = value.length === 0 ? "Song name cannot be empty" : "";
            break;
        case "artist":
            errors.artist = value.length === 0 ? "Artist name cannot be empty" : "";
            break;
        case "link":
            if (value.length === 0) {
            errors.link = "Link cannot be empty";
            } else if (!this.isValidSpotifyUrl(value)) {
            errors.link = "Invalid Spotify URL";
            } else {
            errors.link = "";
            }
            break;
        default:
            break;
        }

        this.setState({ errors, [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, artist, link, errors } = this.state;
        if (name && artist && link && !errors.name && !errors.artist && !errors.link) {
            const newSong = {
                name,
                artist,
                link,
                playlistId: this.state.playlistId,
                addedBy: this.state.addedBy,
            };
        
            // const newSong = {
            //     name: this.state.name,
            //     artist: this.state.artist,
            //     link: this.state.link,
            //     playlistId: this.state.playlistId,
            //     addedBy: this.state.addedBy,
            // };

            console.log(newSong);

            try{
                const response = await fetch(`/playlist/${this.state.playlistId}/song`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newSong),
                });
                const data = await response.json();
                console.log(data);
                // Clear form state values
                this.setState({ name: "", artist: "", link: "" });
            } catch (error) {
                console.error(error);
            }

        }else{
            console.error("Invalid form");
        }
        
        //NEED TO IMPLEMENT TO ACTUALLY ADD SONG HERE

        //clear form.state values
        //this.setState({name: "", artist: "", link: ""});

    };

    isValidSpotifyUrl = (url) => {
        const regex = /(?:track\/|spotify:track:)([a-zA-Z0-9]+)/;
         return regex.test(url);
    };

    render(){
        const {errors} = this.state;
        return (
            <div className="add-to-playlist">
                {/* <h1>Add Song To Playlist</h1> */}
                <form onSubmit={this.handleSubmit} className="add-song-to-playlist-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                    {errors.name && <span className="error">{errors.name}</span>}
                    <label htmlFor="author">Artist:</label>
                    <input type="text" id="artist" name="artist" value={this.state.artist} onChange={this.handleChange} required />
                    {errors.artist && <span className="error">{errors.artist}</span>}
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" value={this.state.link} onChange={this.handleChange} required />
                    {errors.link && <span className="error">{errors.link}</span>}
                    <button type="submit">Add to Playlist</button>
                </form>
            </div>
        );
    }
}

export default AddSongToPlayList;