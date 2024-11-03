import React, { useEffect, useState } from 'react';
//import "../styles/Playlist.css";
import "../styles/EditPlaylist.css";

const EditPlaylist = ({ playlist, onEditComplete }) => {
    const [name, setName] = useState(playlist.name);
    const [description, setDescription] = useState(playlist.description);
    const [coverImage, setCoverImage] = useState(playlist.coverImage);
    const [genre, setGenre] = useState(playlist.genre);
    //const [hashtags, setHashtags] = useState(playlist.hashtags ? playlist.hashtags.split(",") : []);
    const [hashtags, setHashtags] = useState(Array.isArray(playlist.hashtags) ? playlist.hashtags : (playlist.hashtags || "").split(","));

    //for genre
    // useEffect(() => {
    //     setGenre(playlist.genre);
    // }, [playlist.genre]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const updatedPlaylist = { name, description, coverImage, genre,  hashtags: hashtags, };
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('genre', genre);
        formData.append('hashtags', hashtags.join(","));
        formData.append('coverImage', coverImage);

        try {
        const response = await fetch(`/playlist/${playlist.playlistId}`, {
            method: 'PUT',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(updatedPlaylist),
            body: formData,
        });
        const data = await response.json();
        if (data.success) {
            onEditComplete();
        } else {
            console.error('Failed to update playlist');
        }
        } catch (error) {
        console.error(error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setCoverImage(file);
    };

    const handleHashtagChange = (e) => {
        const hashtagString = e.target.value;
        const hashtagsArray = hashtagString.split(",").map((hashtag) => hashtag.trim());
        setHashtags(hashtagsArray);
      };

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    return (
        <div className="edit-playlist-container">
            <h1>Edit Playlist</h1>
        <form onSubmit={handleSubmit} className="edit-playlist-form">
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Genre:
                {/* <select> */}
                {/* <select defaultValue={genre} onChange={(e) => setGenre(e.target.value)}> */}
                <select defaultValue={genre} onChange={handleGenreChange}>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="hip-hop">Hip Hop</option>
                    <option value="jazz">Jazz</option>
                    <option value="country">Country</option>
                    <option value="metal">Metal</option>
                    <option value="classical">Classical</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>
                Cover Image URL:
                {/* <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} /> */}
                <input type="file" onChange={handleImageChange} />
            </label>
            <label>
                Hashtags:
                {/* <input type="text" /> */}
                <input type="text" value={hashtags.join(",")} onChange={handleHashtagChange} />
            </label>
            <button type="submit">Save</button>
            {/* cancel button */}
            <button type="button" onClick={onEditComplete}>Cancel</button>
        </form>
        </div>
    );
};

export default EditPlaylist;