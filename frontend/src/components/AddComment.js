import React, { useState } from 'react';
import "../styles/Playlist.css";

// const AddComment = ({ playlistId }) => {
//     const [text, setText] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add comment logic here
//         setText('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="add-comment-form">
//             <label>
//                 Add a Comment:
//             </label>
//             <textarea value={text} onChange={(e) => setText(e.target.value)} />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

//make class component:
class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            userId : localStorage.getItem("userId"),
        };
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add comment logic here
    //     this.setState({
    //         text: '',
    //     });
    // };

     handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/playlist/${this.props.playlistId}/comment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: this.state.userId, comment: this.state.text }),
            });
            const data = await response.json();
            console.log(data);
            this.setState({
                text: '',
            })
            this.props.onCommentAdded(data.newComment);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-comment-form">
                <label>
                    Add a Comment:
                </label>
                <textarea value={this.state.text} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddComment;