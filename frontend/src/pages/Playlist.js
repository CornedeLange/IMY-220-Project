import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import BasicPlaylist from '../components/BasicPlaylist'; 
import EditPlaylist from '../components/EditPlaylist'; 
import ListComments from '../components/ListComments'; 
import AddComment from '../components/AddComment'; 
import "../styles/Playlist.css";

const Playlist = () => {
    const { playlistId } = useParams(); // Get playlist ID from URL
    const [playlist, setPlaylist] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [comments, setComments] = useState([]);
    const [owner, setOwner] = useState(null);
    const userId = localStorage.getItem("userId");
    const isOwner = userId === owner;

    useEffect(() => {
        const fetchPlaylist = async () =>{
            try{
                
                    const response = await fetch(`/api/playlist/${playlistId}`);
                    const data = await response.json();
                    console.log(data);
                    setPlaylist(data.playlist);
                    console.log("OWNER: ", data.user.userId);
                    //setComments(data.playlist.comments);
                    setOwner(data.user.userId);
                }catch(error){
                    console.error(error);
                }
            };
           // setPlaylist(fetchedPlaylist);
           fetchPlaylist();
    }, [playlistId]);


    useEffect(() => {
        const fetchComments = async () => {
            try{
                const response = await fetch(`/api/comments/${playlistId}`);
                const data = await response.json();
                setComments(data);
            }
            catch(error){
                console.error(error);
            }
        };
        fetchComments();
    },[playlistId]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        // fetchPlaylist();
        this.fetchPlaylist();
    };

    const handleDeletePlaylist = async () => {
        try {
            const response = await fetch(`/playlist/${playlistId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                // Redirect to homepage or display a success message
            } else {
                console.error('Failed to delete playlist');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Navigation />
            {isEditing ? (
                <EditPlaylist playlist={playlist} onEditComplete={handleEditToggle} />
            ) : (
                <div className="playlist-page-container">
                    {playlist && (
                        <>
                            {isOwner ? (
                                <div className="playlist-info-and-edit">
                                    <BasicPlaylist playlist={playlist} owner={owner} />
                                    <button onClick={handleEditToggle}>
                                        {isEditing ? 'Cancel Editing' : 'Edit Playlist'}
                                    </button>
                                    <button onClick={handleDeletePlaylist}>
                                        Delete Playlist
                                    </button>
                                </div>
                            ) : (
                                <div className="playlist-info">
                                    <BasicPlaylist playlist={playlist} owner={owner} />
                                </div>
                            )}
                            
                            <div className="playlist-page-comment-container">
                                <ListComments playlistId={playlistId} comments={comments}
                                onCommentAdded={(newComment) => {
                                    setComments((prevComments) => [...prevComments, newComment]);
                                  }}/>
                                <AddComment playlistId={playlistId} onCommentAdded={(newComment) => {
                                    setComments((prevComments) => [...prevComments, newComment]);
                                    }}/>
                            </div>
                            
                        </>
                    )}
                    
                </div>
            )}
        </div>
    );
};

export default Playlist;