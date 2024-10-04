import React, {useState} from "react";
import EditProfile from "./EditProfile";
import "../styles/BasicProfile.css";

const BasicProfile = ({ username, profilePicture, bio, numFollowers, socials, age, toggleEditProfile, isFriend, onFriendToggle, currentUser, userId }) => {
    const [editingProfile, setEditingProfile] = useState(false);

    const handleToggleEditProfile = () => {
        setEditingProfile(prev => !prev);
        if (toggleEditProfile) toggleEditProfile(); //calls the function from parent
    };

    //const isCurrentUserProfile = username === currentUser;
    //const isCurrentUserProfile = true; // Hardcoded for now
    const userIdFromLocalStorage = localStorage.getItem("userId");
    const isCurrentUserProfile = userIdFromLocalStorage === userId;

    return (
        <div className="basic-profile-container">
            <aside>
            <div className="profile-header">
                    <img src={profilePicture || "https://via.placeholder.com/150"} alt={`${username}'s profile`} className="profile-picture" />
                    <h3>{username}</h3>
                    <p>{bio}</p>
                    <p>{numFollowers} followers</p>

                        {/* USE THIS FOR DELIVERABLE 2 */}
                    {!isCurrentUserProfile && (
                        //GO BACK TO THIS???/
                        // <button onClick={onFriendToggle}>
                        //     {isFriend ? "Remove Friend" : "Add Friend"}
                        // </button>
                        <button onClick={onFriendToggle}>
                            {isFriend ? "Remove Friend" : "Add Friend"}
                            </button>
                    )}

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
                    {/* <p>Socials: {socials}</p> */}
                    
                </div>
            </aside>
        </div>
    );
};

export default BasicProfile;