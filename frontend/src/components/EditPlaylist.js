import React, { useState } from 'react';
import "../styles/Playlist.css";

const EditPlaylist = ({ playlist, onEditComplete }) => {
    const [name, setName] = useState(playlist.name);
    const [description, setDescription] = useState(playlist.description);
    const [coverImage, setCoverImage] = useState(playlist.coverImage);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update playlist data here
        onEditComplete();
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
                <select>
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
                <input type="text" />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default EditPlaylist;