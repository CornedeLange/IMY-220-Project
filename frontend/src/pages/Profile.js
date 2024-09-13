import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navigation from "../components/Navigation";
import CreatePlaylist from "../components/CreatePlaylist";
import BasicProfile from "../components/BasicProfile";
import EditProfile from "../components/EditProfile";
import PlaylistPreview from "../components/PlaylistPreview";
import Song from "../components/Song";
import FollowerFollowing from "../components/FollowerFollowing";
import "../styles/Profile.css";

//json dummie dat for PlaylistPreview atleast 3
const playlist = [
    {playlistName: "Playlist Name 1", description: "Description 1", numSongs: "10", coverImage: "https://via.placeholder.com/150", hashtags: ["#rock", "#summer"]},
    {playlistName: "Playlist Name 2", description: "A very very long description...", numSongs: "20", coverImage: "https://via.placeholder.com/150", hashtags: ["#chill", "#focus"]},
    {playlistName: "Playlist Name 3", description: "Description 3", numSongs: "0", coverImage: "https://via.placeholder.com/150", hashtags: ["#pop"]},
    {playlistName: "Playlist Name 4", description: "Description 4", numSongs: "5", coverImage: "https://via.placeholder.com/150", hashtags: ["#party", "#goodvibes"]},
    {playlistName: "Playlist Name 5", description: "Description 5", numSongs: "7", coverImage: "https://via.placeholder.com/150", hashtags: ["#workout"]}
  ];

  const songs = [
    // {songName: "Song Name 1",artist: "Artist 1",link: "https://link1",dateAdded: "2024/01/01",},
    // {songName: "Song name 1", artits: "Artist3", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123", currentUser:"user123", isAdmin: false, onDelete: handleDelete},
    {songName: "Song name 1", artist: "Artist1", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123"},
    {songName: "Song name 2", artist: "Artist2", link: "https://link2",dateAdded: "2024/01/01", addedBy:"user456"},
    {songName: "Song name 3", artist: "Artist3", link: "https://link3",dateAdded: "2024/01/01", addedBy:"user123"},
    {songName: "Song name 4", artist: "Artist4", link: "https://link4",dateAdded: "2024/01/01", addedBy:"user444"},
    {songName: "Song name 5", artist: "Artist5", link: "https://link5",dateAdded: "2024/01/01", addedBy:"user444"},
    {songName: "Song name 6", artist: "Artist6", link: "https://link6",dateAdded: "2024/01/01", addedBy:"user123"},
  ];

const followersData = [
    {username: "Follower 1", profilePicture: "https://via.placeholder.com/150", bio: "I like music", numFollowers: 10, socials: "Instagram", age: 25},
    {username: "Follower 2", profilePicture: "https://via.placeholder.com/150", bio: "I like music", numFollowers: 10, socials: "Instagram", age: 25},
];

const followingData = [
    {username: "Following 1", profilePicture: "https://via.placeholder.com/150", bio: "I like music", numFollowers: 10, socials: "Instagram", age: 25},
    {username: "Following 2", profilePicture: "https://via.placeholder.com/150", bio: "I like music", numFollowers: 10, socials: "Instagram", age: 25},
];

const Profile = () => {
    const { userId } = useParams(); //extracts userId parameter from URL
    const [profile, setProfile] = useState(null); //this means it initializes profile state to null
    const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(false);
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isFriend, setIsFriend] = useState(false); // To determine if the current user is a friend
    const [isOwnProfile, setIsOwnProfile] = useState(false); // To check if viewing own profile
    //to only show followers or only show following
    const [showFollowers, setShowFollowers] = useState(true);

    //so when the userId changes this will execute
    useEffect(() => {
        // Fetch profile data based on userId
        const fetchProfileData = async () => {
            // Replace with actual data fetching
            const fetchedProfile = {
                username: "John Doe",
                profilePicture: "https://via.placeholder.com/150",
                bio: "I like music",
                numFollowers: 10,
                socials: "Instagram",
                age: 25,
                isFriend: false,
                email: "test@gmail.com",
            };
            setProfile(fetchedProfile);
            // Check if the current user is viewing their own profile
            setIsOwnProfile(userId === "userId"); // Replace with actual current user ID
        };
        fetchProfileData();
    }, [userId]);

    const handleCreatePlaylistToggle = () => {
        setShowCreatePlaylistForm(!showCreatePlaylistForm);
    };

    const handleEditProfileToggle = () => {
        setIsEditingProfile(!isEditingProfile);
    };

    const handleFriendToggle = () => {
        setIsFriend(!isFriend); // Toggle friend status
    };

    const updateProfile = (updatedProfile) => {
        setProfile((prefProfile) => ({...prefProfile, ...updatedProfile}));
        // setIsEditingProfile(false);
        setIsEditingProfile(!isEditingProfile);
    }
    
    return (
            <div>
                <Navigation/>
                {/* Create Playlist Button */}
        <div className="create-playlist-button">
            <button onClick={handleCreatePlaylistToggle}>
                {showCreatePlaylistForm ? "Hide Create Playlist" : "Create Playlist"}
            </button>
        </div>
        
        {/* Conditionally render CreatePlaylist or the rest of the profile content */}
        {showCreatePlaylistForm ? (
            <CreatePlaylist />
        ) : (
            <div className="profile-page-container">
                <div className="top-section">
                    <div className="profile-info">
                        {!isEditingProfile ? (
                            <BasicProfile
                                username={profile?.username}
                                profilePicture={profile?.profilePicture}
                                bio={profile?.bio}
                                email={profile?.email}
                                numFollowers={profile?.numFollowers}
                                socials={profile?.socials}
                                age={profile?.age}
                                toggleEditProfile={handleEditProfileToggle}
                                isFriend={profile?.isFriend}
                                onFriendToggle={handleFriendToggle}
                                currentUser={"John Doe"}
                            />
                        ) : (
                            <EditProfile
                                username={profile.username}
                                profilePicture={profile.profilePicture}
                                bio={profile.bio}
                                email={profile.email}
                                updateProfile={updateProfile}
                                toggleEditProfile={handleEditProfileToggle}
                            />
                        )}
                    </div>

                    <div className="follower-following-container">
                        <div className="follower-following-toggle">
                            <button onClick={() => setShowFollowers(true)}>Followers</button>
                            <button onClick={() => setShowFollowers(false)}>Following</button>
                        </div>
                        {showFollowers ? (
                            <div className="followers-container">
                                <h2>Your Followers</h2>
                                <FollowerFollowing users={followersData} type="followers" />
                            </div>
                        ) : (
                            <div className="following-container">
                                <h2>People you are Following</h2>
                                <FollowerFollowing users={followingData} type="following" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="song-playlist-container">
                    <div className="users-playlist">
                        <h2>My Playlists</h2>
                        {playlist.map((playlist, index) => (
                            <PlaylistPreview
                                key={index}
                                playlistName={playlist.playlistName}
                                description={playlist.description}
                                numSongs={playlist.numSongs}
                                coverImage={playlist.coverImage}
                                hashtags={playlist.hashtags}
                                onHashtagClick={() => {}}
                            />
                        ))}
                    </div>
                    <div className="users-songs">
                        <h2>My Songs</h2>
                        {songs.map((song, index) => (
                            <Song
                                key={index}
                                name={song.songName}
                                artist={song.artist}
                                link={song.link}
                                dateAdded={song.dateAdded}
                                addedBy={song.addedBy}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )}
        </div>
    );

};

export default Profile;