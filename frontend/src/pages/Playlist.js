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

    useEffect(() => {
        // Fetch playlist data based on playlistId
        const fetchPlaylistData = async () => {
            // Replace with actual data fetching
            const fetchedPlaylist = {
                id: playlistId,
                name: "Playlist Name",
                description: "Playlist Description",
                coverImage: "https://via.placeholder.com/150",
                hashtags: ["#rock", "#summer"],
                numSongs: 2,
                songs: [
                    { id: 1, name: "Song 1", artist: "Artist 1", link: "https://link1" },
                    { id: 2, name: "Song 2", artist: "Artist 2", link: "https://link2" }
            //         {songName: "Song name 1", artist: "Artist1", link: "https://link1",dateAdded: "2024/01/01", addedBy:"user123"},
            // {songName: "Song name 2", artist: "Artist2", link: "https://link2",dateAdded: "2024/01/01", addedBy:"user456"},

                ]
            };
            setPlaylist(fetchedPlaylist);
        };
        fetchPlaylistData();
    }, [playlistId]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
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
                            <div className="playlist-info-and-edit">
                                <BasicPlaylist playlist={playlist} />
                                <button onClick={handleEditToggle}>
                                    {isEditing ? 'Cancel Editing' : 'Edit Playlist'}
                                </button>
                            </div>
                            
                            <div className="playlist-page-comment-container">
                                <ListComments playlistId={playlistId} />
                                <AddComment playlistId={playlistId} />
                            </div>
                            
                        </>
                    )}
                    
                </div>
            )}
        </div>
    );
};

export default Playlist;