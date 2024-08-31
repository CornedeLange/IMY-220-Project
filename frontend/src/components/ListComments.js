import React from "react";

class ListComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: null
        };
    }

    render(){
        return (
            <div>
                ListComments
            </div>
        );
    }
}

export default ListComments;