import React from "react";
import ProfilePreview from "../components/ProfilePreview";
import "../styles/FollowerFollowing.css";

class FollowerFollowing extends React.Component{
    render(){
        const {users, type} = this.props;
        // const title = type === "followers" ? "Followers" : "Following";
        return(
        <div className="follower-following">
            {/* <h2>{title}</h2> */}
            <div className="profile-list">
                {users && users.length > 0 ? (
                    users.map((user, index) => (
                        <ProfilePreview
                            key={index}
                            username={user.username}
                            profilePicture={user.profilePicture}
                            bio={user.bio}
                            userId={user.userId}
                            // Add other props as necessary
                        />
                    ))
                ) : (
                    <p>No to display</p>
                )}
            </div>
        </div>
    );
}
}

export default FollowerFollowing;