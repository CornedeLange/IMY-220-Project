import React from 'react';
import "../styles/Playlist.css";

const Comment = ({ comment }) => {
    return (
        <div className="comment-text-author">
            <p>{comment.text}</p>
            <p>By: {comment.author}</p>
        </div>
    );
};

export default Comment;