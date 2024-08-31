import React from "react";

class AddComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: null
        };
    }

    render(){
        return (
            <div>
                AddComment
            </div>
        );
    }
}

export default AddComment;