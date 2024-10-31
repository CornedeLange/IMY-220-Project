import React from "react";
import "../styles/AddSongToWebsite.css";

class AddSongToWebsite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            artist: "",
            link: "",
            //dateAdded: "",
            errors:{
                name: "",
                artist: "",
                link: "",
                // dateAdded: ""
            },
            addedBy: localStorage.getItem("userId"),
            successMessage: "",
            errorMessage: "",
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
                // errors.link = value.length === 0 ? "Link cannot be empty" : "";
                if(value.length === 0){
                    errors.link = "Link cannot be empty";
                }else if(!this.isValidSpotifyUrl(value)){
                    errors.link = "Invalid Spotify URL";
                }else{
                    errors.link = "";
                }
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    };

    handleSubmit  = (event) => {
        event.preventDefault();

        const { name, artist, link, errors, addedBy } = this.state;
        if (name && artist && link && !errors.name && !errors.artist && !errors.link) {
            const song = {
                name,
                artist,
                link,
                addedBy
            };

            try {
                fetch("/addSongToWebsite", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(song),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.message === "Song added") {
                          console.log("Song added successfully");
                          this.setState({
                            name: "",
                            artist: "",
                            link: "",
                            successMessage: "Song added successfully!",
                            errorMessage: "",
                          });
                          this.props.onAddSong(song);
                          setTimeout(() => {
                            this.setState({
                              successMessage: "",
                            });
                          }, 3000); // Display the message for 3 seconds
                        } else {
                          this.setState({
                            errorMessage: "Failed to add song. Please try again.",
                          });
                          setTimeout(() =>{
                            this.setState({
                              errorMessage: "",
                            });
                          }, 3000); // Display the message for 3 seconds)

                        }
                      })
                      .catch((error) => {
                        console.error("Failed to add song", error);
                        this.setState({
                          errorMessage: "Failed to add song. Please try again.",
                        });
                      });
                }
            catch (error) {
                console.error("Error:", error);
            }
        }else {
            console.error("Invalid form");
        }

    };

    isValidSpotifyUrl = (url) => {
      const regex = /(?:track\/|spotify:track:)([a-zA-Z0-9]+)/;
      return regex.test(url);
    }

    render(){
        const { errors, successMessage, errorMessage } = this.state;
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
                
                    <button type="submit">Add Song</button>
                    {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
        );
    }
}

export default AddSongToWebsite;