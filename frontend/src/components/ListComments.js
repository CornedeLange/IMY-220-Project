import React, { useEffect, useState } from 'react';
import Comment from './Comment'; 
import "../styles/Playlist.css";

//make class component
class ListComments extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: [],
    //     };
    // }

    componentDidMount() {
        // Fetch comments based on playlistId
        // Replace with actual data fetching
        // const fetchedComments = [
        //     { id: 1, text: "Great playlist!", author: "User1" },
        //     { id: 2, text: "Love these songs!", author: "User2" }
        // ];
        // this.setState({
        //     comments: fetchedComments,
        // });
    }

    render() {
        const {playlistId, comments, onCommentAdded} = this.props;
        return (
            <div className="comment-container">
                <h2>Comments</h2>
                {comments && comments.map(comment => (
                    <Comment key={comment.date} comment={comment} />
                ))}
            </div>
        );
    }
}

export default ListComments;