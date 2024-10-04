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

const Profile = () => {

    const { userId } = useParams();
    const currentUserId = localStorage.getItem("userId");
    const [profile, setProfile] = useState(null);
    const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(false);
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isFriend, setIsFriend] = useState(false);
    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const [showFollowers, setShowFollowers] = useState(true);
    const [followersData, setFollowersData] = useState([]);
    const [followingData, setFollowingData] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const[song, setSong] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const response = await fetch(`/api/profile/${userId}`);
          const data = await response.json();
          console.log(data);
          setProfile(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProfileData();
    }, [userId]);

    useEffect(() => {
      const fetchPlaylists = async () => {
        try {
          const response = await fetch(`/profile/${userId}/playlists`);
          const data = await response.json();
          //debug
          console.log("Playlists", data);
          setPlaylist(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPlaylists();
    }, [userId]);

    //songs
    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const response = await fetch(`/profile/${userId}/songs`);
          const data = await response.json();
          //debug
          console.log("Songs", data);
          setSong(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchSongs();
    }, [userId]);

    useEffect(() => {
      const fetchFollowers = async () => {
        try {
          const response = await fetch(`/profile/${userId}/friends`);
          const data = await response.json();
          //debug
          console.log(data);
          setFollowersData(data);

          //setIsFriend(data.includes(currentUserId))
        } catch (error) {
          console.error(error);
        }
      };
      fetchFollowers();
    }, [userId]);

    // useEffect(() => {
    //   const fetchFollowing = async () => {
    //     try {
    //       const response = await fetch(`/profile/${userId}/following`);
    //       const data = await response.json();
    //       setFollowingData(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchFollowing();
    // }, [userId]);

  // useEffect(() => {
  //   const fetchPlaylistComments = async () =>{
  //     try{
  //       const response = await fetch(`/playlist/${playlistId}/comments`);
  //       const data = await response.json();
  //       setComments(data);
  //     }catch(error){
  //       console.error(error);
  //     }
  //   }
  // })

    const handleCreatePlaylistToggle = () => {
        setShowCreatePlaylistForm(!showCreatePlaylistForm);
    };

    const handleEditProfileToggle = () => {
        setIsEditingProfile(!isEditingProfile);
    };


    const handleFriendToggle = async () => {
        try {
          const response = await fetch(`/profile/${userId}/follow`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ followerId: "currentUserId" }),
          });
          const data = await response.json();
          console.log(data);
          setIsFriend(!isFriend);
        } catch (error) {
          console.error(error);
        }
      };

      const handleUnfriend = async () => {
        try {
          const response = await fetch(`/profile/${userId}/unfollow`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ followerId: "currentUserId" }),
          });
          const data = await response.json();
          console.log(data);
          setIsFriend(!isFriend);
        } catch (error) {
          console.error(error);
        }
      };
    
    // const updateProfile = (updatedProfile) => {
    //     setProfile((prefProfile) => ({...prefProfile, ...updatedProfile}));
    //     // setIsEditingProfile(false);
    //     setIsEditingProfile(!isEditingProfile);
    // }
    const updateProfile = async (updatedProfile) => {
        try {
          const response = await fetch(`/profile/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProfile),
          });
          const data = await response.json();
          console.log(data);
          setProfile((prevProfile) => ({ ...prevProfile, ...updatedProfile }));
          setIsEditingProfile(false);
        } catch (error) {
          console.error(error);
        }
      };
    
    return (
            <div>
                <Navigation/>
                {/* Create Playlist Button */}
                    <div className="create-playlist-button">
                        {/* <button onClick={handleCreatePlaylistToggle}>
                            {showCreatePlaylistForm ? "Hide Create Playlist" : "Create Playlist"}
                        </button> */}
                        {currentUserId === userId && (
                          <button onClick={handleCreatePlaylistToggle}>
                            {showCreatePlaylistForm ? "Hide Create Playlist" : "Create Playlist"}
                          </button>
  )}
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
                              //socials={profile?.socials}
                              age={profile?.age}
                              toggleEditProfile={handleEditProfileToggle}
                              isFriend={isFriend}
                              handleFriendToggle={handleFriendToggle}
                              handleUnfriend={handleUnfriend}
                              userId={userId}
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
                              // <p>hello</p>
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
                                  playlistName={playlist.name}
                                  description={playlist.description}
                                  numSongs={playlist.numSongs}
                                  coverImage={playlist.coverImage}
                                  hashtags={playlist.hashtags}
                                  playlistId={playlist.playlistId}
                                  onHashtagClick={() => {}}
                              />
                          ))}
                      </div>
                      <div className="users-songs">
                          <h2>My Songs</h2>
                          {song.map((song, index) => (
                              <Song
                                  key={index}
                                  name={song.name}
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