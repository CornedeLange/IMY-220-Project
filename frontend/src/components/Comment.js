import React from "react";

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: null
        };
    }

    render(){
        return (
            <div>
                Comment
            </div>
        );
    }
}

export default Comment;