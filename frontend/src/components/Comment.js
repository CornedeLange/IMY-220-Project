import React from 'react';
import "../styles/Playlist.css";

// const Comment = ({ comment }) => {
//     return (
//         <div className="comment-text-author">
//             <p>{comment.text}</p>
//             <p>By: {comment.author}</p>
//         </div>
//     );
// };

//make class component
class Comment extends React.Component {
    render() {
        return (
            <div className="comment-text-author">
                <p>{this.props.comment.comment}</p>
                {/* <p>By: {this.props.comment.userId}</p> */}
                <p><i>By: {this.props.comment.username}</i></p>
            </div>
        );
    }
}

export default Comment;