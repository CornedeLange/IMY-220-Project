import React, {useState} from "react";
import EditProfile from "./EditProfile";
import "../styles/BasicProfile.css";

const BasicProfile = ({ username, profilePicture, bio, numFollowers,numFriends, socials, age, toggleEditProfile, isFriend, onFriendToggle, currentUser, userId }) => {
    const [editingProfile, setEditingProfile] = useState(false);

    const handleToggleEditProfile = () => {
        setEditingProfile(prev => !prev);
        if (toggleEditProfile) toggleEditProfile(); //calls the function from parent
    };

    const userIdFromLocalStorage = localStorage.getItem("userId");
    const isCurrentUserProfile = userIdFromLocalStorage === userId;
   // console.log("Image: ", profilePicture);
    return (
        <div className="basic-profile-container">
            <aside>
            <div className="profile-header">
                    {/* <img src={`../public/assests/${profilePicture}` || "https://via.placeholder.com/150"} alt={`${username}'s profile`} className="profile-picture" /> */}
                    <img src={profilePicture || "https://via.placeholder.com/150"} alt={`${username}'s profile`} className="profile-picture-page" />
                    <h3>{username}</h3>

                    {!isFriend && !isCurrentUserProfile && (
                        <p>Only friends can see the full profile</p>
                    )}

                    {/* <p>{bio}</p>
                    <p>{numFollowers} followers</p> */}

                {(isFriend || isCurrentUserProfile) && (
                        <>
                            <p>{bio}</p>
                            {/* <p>{numFriends} friends</p>
                            <p>Age: {age}</p> */}
                            {/* Add more information that only friends or the user can see */}
                        </>
                    )}

                    {!isCurrentUserProfile && (
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
                    {/* <h3>More Info</h3>
                    <p>Username: {username}</p>
                    <p>Age: {age}</p>
                    <p>Bio: {bio}</p>
                    <p>Followers: {numFollowers}</p> */}

                    {!isFriend && !isCurrentUserProfile && (
                        <p>Only friends can see the full profile</p>
                    )}

                    {(isFriend || isCurrentUserProfile) && (
                        <>
                            <h3>More Info</h3>
                            <p>Username: {username}</p>
                            <p>Age: {age}</p>
                            <p>Bio: {bio}</p>
                            <p>Number of friends: {numFriends}</p>
                            {/* Add more information that only friends or the user can see */}
                        </>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default BasicProfile;