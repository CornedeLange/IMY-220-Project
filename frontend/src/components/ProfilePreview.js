import React from "react";

class ProfilePreview extends React.Component{
    
        // constructor(props){
        //     super(props);
        //     this.state = {
        //         profile: null
        //     };
        // }
    
        render(){
            const { username, profilePicture, bio, numFollowers} = this.props;
            return (
                <div className="profile-preview">
                    <img src={profilePicture} alt={`${username}'s profile`} className="profile-picture" />
                    <h3>{username}</h3>
                    <p>{bio}</p>
                    <p>{numFollowers} followers</p>
                </div>
            );
        }
}

export default ProfilePreview ;
