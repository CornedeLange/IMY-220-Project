import React from "react";
import "../styles/AddSongToWebsite.css";

class AddSongToWebsite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            artist: "",
            link: "",
            dateAdded: "",
            errors:{
                name: "",
                artist: "",
                link: "",
                // dateAdded: ""
            }
        };
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
                errors.link = value.length === 0 ? "Link cannot be empty" : "";
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    };

    handleSubmit  = (event) => {
        event.preventDefault();
        // const newSong = {
        //     name: this.state.name,
        //     artist: this.state.artist,
        //     link: this.state.link,
        //     dateAdded: this.state.dateAdded //remember automatic

        // };
        //console.log(newSong);
        //logic to actually add song to website will be here
        //clear form state values
        // this.setState({name: "",artist: "",link: "",dateAdded: ""});

        const { name, artist, link, errors } = this.state;
        if (name && artist && link && !errors.name && !errors.artist && !errors.link) {
            const song = {
                name: this.state.name,
                artist: this.state.artist,
                link: this.state.link,
                dateAdded: new Date().toISOString()
            };
            console.log(song);
            // Add song to website
            // this.props.onAddSong(song);
        } else {
            console.error("Invalid form");
        }

    };

    render(){
        const { errors } = this.state;
        return (
            <form className="add-song-to-website" onSubmit={this.handleSubmit}>
                
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                    {errors.name && <span className="error">{errors.name}</span>}
                
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" id="artist" name="artist" value={this.state.artist} onChange={this.handleChange} required />
                    {errors.artist && <span className="error">{errors.artist}</span>}
                
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" value={this.state.link} onChange={this.handleChange} required />
                    {errors.link && <span className="error">{errors.link}</span>}
                
                {/* date added should be automatic */}
                {/* <div>
                    <label htmlFor="dateAdded">Date Added:</label>
                    <input type="date" id="dateAdded" name="dateAdded" value={this.state.dateAdded} onChange={this.handleChange} required />
                </div> */}
                <button type="submit">Add Song</button>
            </form>
        );
    }
}

export default AddSongToWebsite;