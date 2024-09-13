import React, { useEffect, useState } from 'react';
import Comment from './Comment'; 
import "../styles/Playlist.css";

const ListComments = ({ playlistId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch comments based on playlistId
        const fetchComments = async () => {
            // Replace with actual data fetching
            const fetchedComments = [
                { id: 1, text: "Great playlist!", author: "User1" },
                { id: 2, text: "Love these songs!", author: "User2" }
            ];
            setComments(fetchedComments);
        };
        fetchComments();
    }, [playlistId]);

    return (
        <div className="comment-container">
            <h2>Comments</h2>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default ListComments;