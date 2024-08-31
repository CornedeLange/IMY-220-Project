import React from "react";

class AddSongToWebsite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            author: "",
            link: "",
            dateAdded: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit  = (event) => {
        event.preventDefault();
        const newSong = {
            name: this.state.name,
            author: this.state.author,
            link: this.state.link,
            dateAdded: this.state.dateAdded

        };
        //console.log(newSong);
    };

    render(){
        return (
            <form className="add-song-to-website" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleChange} required />
                </div>
                <div>
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" value={this.state.link} onChange={this.handleChange} required />
                </div>
                {/* date added????? */}
                <div>
                    <label htmlFor="dateAdded">Date Added:</label>
                    <input type="date" id="dateAdded" name="dateAdded" value={this.state.dateAdded} onChange={this.handleChange} required />
                </div>
            </form>
        );
    }
}

export default AddSongToWebsite;