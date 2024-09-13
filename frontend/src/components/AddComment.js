import React, { useState } from 'react';
import "../styles/Playlist.css";

const AddComment = ({ playlistId }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add comment logic here
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-comment-form">
            <label>
                Add a Comment:
            </label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddComment;