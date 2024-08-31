import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile: null
        };
    }

    render(){
        return (
            <div>
                Profile
            </div>
        );
    }
}

export default Profile;