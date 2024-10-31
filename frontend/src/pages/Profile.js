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
    const [mutualFriends, setMutualFriends] = useState([]);
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
    const [savedPlaylists, setSavedPlaylists] = useState([]);

    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const response = await fetch(`/api/profile/${userId}`);
          const data = await response.json();
          console.log(data);
          setProfile(data);

          //ADDED
          setIsFriend(data.friends.includes(currentUserId));
          //ADDED
        } catch (error) {
          console.error(error);
        }
      };
      fetchProfileData();
    // }, [userId]);
    }, [userId, currentUserId]);

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

    //FETCH FOLLOWERS 
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

    const handleCreatePlaylistToggle = () => {
        setShowCreatePlaylistForm(!showCreatePlaylistForm);
    };

    const handleEditProfileToggle = () => {
        setIsEditingProfile(!isEditingProfile);
    };


    const handleFriendToggle = async () => {
        // try {
        //   const response = await fetch(`/profile/${userId}/follow`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ followerId: "currentUserId" }),
        //   });
        //   const data = await response.json();
        //   console.log(data);
        //   setIsFriend(!isFriend);
        // } catch (error) {
        //   console.error(error);
        // }

        try{
          const action = isFriend ? "removeFriend" : "addFriend";
          const response = await fetch(`/${action}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({userId: currentUserId, friendId: userId}),
          });

          const data = await response.json();
          if(response.ok){
            setIsFriend(!isFriend);
          }else{
            console.error(data.message);
          }
        }
        catch(error){
          console.error(error);
        }
      };

    const updateProfile = async (updatedProfile) => {
        try {
          const response = await fetch(`/profile/${userId}`, {
            method: "PUT",
            body: updatedProfile,
          });
          const data = await response.json();
          console.log(data);
          setProfile((prevProfile) => ({ ...prevProfile, ...updatedProfile }));
          setIsEditingProfile(false);
          fetchProfileData();
        } catch (error) {
          console.error("Update profile error: ", error);
        }
      };

      useEffect(() => {
        const fetchSvedPlaylists = async () => {
          try{
            const response = await fetch(`/api/users/saved-playlists-info?userId=${currentUserId}`);
            const data = await response.json();
            setSavedPlaylists(data);

          }
          catch(error){
            console.error(error);
          }
        };
        fetchSvedPlaylists();
      }, [userId]);
    
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
                              numFriends={followersData.length} 
                              //socials={profile?.socials}
                              age={profile?.age}
                              toggleEditProfile={handleEditProfileToggle}
                              isFriend={isFriend}
                              // handleFriendToggle={handleFriendToggle}
                              // handleUnfriend={handleUnfriend}
                              onFriendToggle={handleFriendToggle}
                              userId={userId}
                              />
                          ) : (
                              <EditProfile
                                  username={profile.username}
                                  profilePicture={profile.profilePicture}
                                  bio={profile.bio}
                                  email={profile.email}
                                  age={profile.age}
                                  updateProfile={updateProfile}
                                  toggleEditProfile={handleEditProfileToggle}
                              />
                              // <p>hello</p>
                          )}
                      </div>

                      {(isFriend || currentUserId === userId) && (

                          

                      <div className="follower-following-container">
                          {/* <div className="follower-following-toggle">
                              <button onClick={() => setShowFollowers(true)}>Followers</button>
                              <button onClick={() => setShowFollowers(false)}>Following</button>
                          </div> */}
                          {/* {showFollowers ? (
                              <div className="followers-container">
                                  <h2>Your Followers</h2>
                                  <FollowerFollowing users={followersData} type="followers" />
                              </div>
                          ) : (
                              <div className="following-container">
                                  <h2>People you are Following</h2>
                                  <FollowerFollowing users={followingData} type="following" />
                              </div>
                          )} */}

                          <div className="followers-container">
                            <h2>Your Friends</h2>
                            <FollowerFollowing users={followersData} type="followers" />
                            </div>
                      </div>
                       )}
                  </div>

                      {(isFriend || currentUserId === userId) && (

                     

                  <div className="song-playlist-container">
                    <h2>My Playlists</h2><br/>
                      <div className="users-playlist">
                          {/* <h2>My Playlists</h2><br/> */}
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
                      {/* <div className="users-songs">
                          <h2>My Songs</h2><br/>
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
                      </div> */}

                      {/* USERS SAVED PLAYLIST */}
                      <h2>Saved Playlists</h2>
                      {savedPlaylists && savedPlaylists.length > 0 && (
                        <div className="users-saved-playlists">
                            {/* <h2>Saved Playlists</h2> */}
                            {savedPlaylists.map((playlist, index) => (
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
                      )}
                  </div>
                   )}
              </div>
          )}
          </div>
    );

};

export default Profile;