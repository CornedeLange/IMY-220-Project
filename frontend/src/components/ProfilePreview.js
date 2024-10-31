import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProfilePreview.css";

class ProfilePreview extends React.Component{
        render(){
            //ADD USER ID TO PROPS
            const { username, profilePicture, bio, numFollowers, userId} = this.props;
            return (
                <div className="profile-preview">
                    <img src={profilePicture} alt={`${username}'s profile`} className="profile-picture" />
                    <h3>{username}</h3>
                    <p><i>{bio}</i></p>
                    {/* <p>{numFollowers} followers</p> */}
                    {/* <Link to="/profile/:userId">Visit Profile</Link> */}
                    <Link to={`/profile/${userId}`} style={{color:'blue', textDecoration: 'none'}}>Visit Profile</Link>
                </div>
            );
        }
}

export default ProfilePreview ;
