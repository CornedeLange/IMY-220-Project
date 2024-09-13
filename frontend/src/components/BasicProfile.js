import React, {useState} from "react";
import EditProfile from "./EditProfile";
import "../styles/BasicProfile.css";

const BasicProfile = ({ username, profilePicture, bio, numFollowers, socials, age, toggleEditProfile, isFriend, onFriendToggle, currentUser }) => {
    const [editingProfile, setEditingProfile] = useState(false);

    const handleToggleEditProfile = () => {
        setEditingProfile(prev => !prev);
        if (toggleEditProfile) toggleEditProfile(); //calls the function from parent
    };

    const isCurrentUserProfile = username === currentUser;

    return (
        <div className="basic-profile-container">
            <aside>
            <div className="profile-header">
                    <img src={profilePicture || "https://via.placeholder.com/150"} alt={`${username}'s profile`} className="profile-picture" />
                    <h3>{username}</h3>
                    <p>{bio}</p>
                    <p>{numFollowers} followers</p>

                    {/* Conditional rendering for friend request and profile editing */}
                    {isCurrentUserProfile && (
                        <button onClick={onFriendToggle}>
                            {isFriend ? "Remove Friend" : "Send Friend Request"}
                        </button>
                    )}

                        {/* USE THIS FOR DELIVERABLE 2 */}
                    {/* {!isCurrentUserProfile && (
                        <button onClick={onFriendToggle}>
                            {isFriend ? "Remove Friend" : "Send Friend Request"}
                        </button>
                    )} */}

                    {isCurrentUserProfile && (
                        <button onClick={handleToggleEditProfile}>
                            {editingProfile ? "Cancel Edit" : "Edit Profile"}
                        </button>
                    )}

                    {editingProfile && <EditProfile toggleEditProfile={handleToggleEditProfile} />}
                </div>
                <div className="more-user-info">
                    <h3>More Info</h3>
                    <p>Username: {username}</p>
                    <p>Age: {age}</p>
                    <p>Bio: {bio}</p>
                    <p>Followers: {numFollowers}</p>
                    <p>Socials: {socials}</p>
                    
                </div>
                {/* <div className="friends-list">
                    <h3>Friends</h3>
                    <ul>
                       
                        <li>Friend 1</li>
                        <li>Friend 2</li>
                        <li>Friend 3</li>
                        <li>Friend 4</li>
                        <li>Friend 5</li>
                    </ul>
                </div> */}
            </aside>
        </div>
    );
};

export default BasicProfile;