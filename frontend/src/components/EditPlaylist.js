import React, { useState } from 'react';
import "../styles/Playlist.css";

const EditPlaylist = ({ playlist, onEditComplete }) => {
    const [name, setName] = useState(playlist.name);
    const [description, setDescription] = useState(playlist.description);
    const [coverImage, setCoverImage] = useState(playlist.coverImage);
    const [genre, setGenre] = useState(playlist.genre);
    //const [hashtags, setHashtags] = useState(playlist.hashtags ? playlist.hashtags.split(",") : []);
    const [hashtags, setHashtags] = useState(Array.isArray(playlist.hashtags) ? playlist.hashtags : (playlist.hashtags || "").split(","));

    const handleSubmit = async (e) => {
        //e.preventDefault();
        // Update playlist data here
        //onEditComplete();


        //ADDED
        e.preventDefault();


        const updatedPlaylist = { name, description, coverImage, genre,  hashtags: hashtags, };
        try {
        const response = await fetch(`/playlist/${playlist.playlistId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPlaylist),
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

    const handleHashtagChange = (e) => {
        const hashtagString = e.target.value;
        const hashtagsArray = hashtagString.split(",").map((hashtag) => hashtag.trim());
        setHashtags(hashtagsArray);
      };

    return (
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
                Genre
                {/* <select> */}
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="hip-hop">Hip Hop</option>
                    <option value="jazz">Jazz</option>
                    <option value="classical">Classical</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>
                Cover Image URL:
                <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
            </label>
            <label>
                Hashtags:
                {/* <input type="text" /> */}
                <input type="text" value={hashtags.join(",")} onChange={handleHashtagChange} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default EditPlaylist;