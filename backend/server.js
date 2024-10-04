const express = require("express");
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
//ADDED FOR D2
//MONGO DB SETUP
const {MongoClient} = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

const url = "mongodb+srv://Cornedl:Corne%40mongo@imy220.5pexm.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

//
const client = new MongoClient(url);
let db;

async function connect() {
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        db = client.db("imy_220_project");
    }catch(error){
        console.error("Failed to connect to MongoDB", error);
    }  
}

//CONNECT
connect();

app.use(express.json());

//ROUTES
// app.get('/', async (req, res) => {
//     //res.send("Hello World");

// });

const getUserCollection = () => db.collection("user");
const getPlaylistCollection = () => db.collection("playlist");
const getSongCollection = () => db.collection("song");

//Register
app.post("/register", async (req, res) => {
    try {
        const {username, password, email} = req.body;

        if (!username || !password || !email) {
            res.status(400).send("Username, password and email are required");
        }

        const users = db.collection("user");
        console.log("Collection 'user' accessed");

        const user = await users.findOne({
            username: username
        });
        console.log("Existing user check:", user);

        if (user) {
            res.status(409).json({ message: "Username already exists" });
        } else {
            const result = await users.insertOne({
                userId: `UD-${Math.random().toString(36).substr(2, 9)}`,
                username: username,
                passwordHash: password,
                email: email,
                profilePicture: "https://via.placeholder.com/150",
                bio: "",
                age: 0,
                socials: {},
                numFollowers: 0,
                numFollowing: 0,
                friends: [],
                playlists: [],
                songs: []
            });
            console.log("Insertion result:", result);

            if (result.acknowledged) {
                res.status(201).json({
                    message: "User registered",
                    userId: result.insertedId,
                    username: username
                });
            } else {
                res.status(500).json({ message: "Failed to insert user" });
            }
        }
    } catch (error) {
        console.error("Failed to register user", error);
        res.status(500).send("Internal server error");
    }
    
});

//LOGIN
app.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body;
        const users = db.collection("user");
        //debug username, password
        console.log(username, password);
        const user = await users.findOne({
            username: username,
            passwordHash: password
        });
        if (user) {
            res.status(200).json({
                message: "Login successful",
                userId: user.userId,
                username: user.username
            });
        }
        else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
    catch(error){
        console.error("Failed to login", error);
        res.status(500).json({ message: "Internal server error" });
    }

    
});

//GET ALL USERS
app.get("/users", async (req, res) => {
    try {
        const users = db.collection("user");
        const usersList = await users.find().toArray();
        res.send(usersList);
    } catch (error) {
        console.error("Failed to retrieve users", error);
        res.status(500).send("Internal server error");
    }
});


//GET PROFILE
app.get("/api/profile/:userId", async (req, res) => {
    //console.log("Hello");
    const userId = req.params.userId;
    try {
        
        const user = await getUserCollection().findOne({userId: userId});
        if (user) {
            const {passwordHash, ...profileData} = user;
            //res.status(200).send(profileData);
            res.status(200).send(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Failed to retrieve user profile", error);
        res.status(500).send("Internal server error");
    }
});

//UPDATE PROFILE still FIX************************
app.put("/profile/:userId", async (req, res) => {
    const userId = req.params.userId;
    const updatedProfile = req.body;
    try {
        
        const result = await getUserCollection().updateOne({userId: userId}, {$set: updatedProfile});
        if (result.acknowledged) {
            //res.status(200).send("Profile updated");
            res.status(200).json({message : "Profile updated"});
        } else {
            res.status(500).send("Failed to update profile");
        }
    } catch (error) {
        console.error("Failed to update user profile", error);
        res.status(500).send("Internal server error");
    }
});

//DELETE PROFILE ********************
app.delete("/profile/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await getUserCollection().deleteOne({userId: userId});
        if (result.deletedCount > 0) {
            res.status(200).send("Profile deleted");
        } else {
            res.status(404).send("Profile not found");
        }
    } catch (error) {
        console.error("Failed to delete user profile", error);
        res.status(500).send("Internal server error");
    }
});


//GET USERS PLAYLISTS   
app.get("/profile/:userId/playlists", async (req, res) => {
    //console.log("DAMNNNNNNNNN YOHHHHHHHHHH");
    const userId = req.params.userId;
    //console.log("User ID", userId);
    try {
      const user = await getUserCollection().findOne({ userId: userId });
      if (!user) {
        res.status(404).send("User not found");
        return;
      }
  
    // Get playlist IDs from user document
    const playlistIds = user.playlists;
    //console.log("Playlist IDs", playlistIds);

    // Query playlist collection using playlist IDs
    const playlists = await getPlaylistCollection().find({ playlistId: { $in: playlistIds } }).toArray();
    //console.log("Playlists", playlists);
    res.status(200).send(playlists);
  } catch (error) {
    console.error("Failed to retrieve user playlists", error);
    res.status(500).send("Internal server error");
  }
});

//GET USERS SONGS
app.get("/profile/:userId/songs", async (req, res) => {
    const userId = req.params.userId;
    //console.log("User ID", userId);
    try {
        const user = await getUserCollection().findOne({userId: userId});
       if (!user) {
        res.status(404).send("User not found");
        return;
        }
        // Get song IDs from user document
        const songIds = user.songs;
        //console.log("Song IDs", songIds);
        // Query song collection using song IDs
        const songs = await getSongCollection().find({ songId: { $in: songIds } }).toArray();
        //console.log("Songs", songs);
        res.status(200).send(songs);


    } catch (error) {
        console.error("Failed to retrieve user songs", error);
        res.status(500).send("Internal server error");
    }
});

// FOLLOW A USER***********
app.post("/profile/:userId/follow", async (req, res) => {
    const userId = req.params.userId;
    const { followerId } = req.body; // The ID of the user who wants to follow


    try {
        const result = await getUserCollection().updateOne(
            { userId: userId },
            { $addToSet: { friends: followerId } } // Use $addToSet to avoid duplicates
        );

        if (result.modifiedCount > 0) {
            res.status(200).send("Followed successfully");
        } else {
            res.status(400).send("Already following or user not found");
        }
    } catch (error) {
        console.error("Failed to follow user", error);
        res.status(500).send("Internal server error");
    }
});


// UNFOLLOW A USER****
app.post("/profile/:userId/unfollow", async (req, res) => {
    const userId = req.params.userId;
    const { followerId } = req.body; // The ID of the user who wants to unfollow

    try {
        const result = await getUserCollection().updateOne(
            { userId: userId },
            { $pull: { friends: followerId } } // Use $pull to remove the followerId
        );

        if (result.modifiedCount > 0) {
            res.status(200).send("Unfollowed successfully");
        } else {
            res.status(400).send("Not following or user not found");
        }
    } catch (error) {
        console.error("Failed to unfollow user", error);
        res.status(500).send("Internal server error");
    }
});


// Get the friends list of a user
app.get("/profile/:userId/friends", async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await getUserCollection().findOne({ userId: userId });
        if (user) {
            const friends = await getUserCollection().find({ userId: { $in: user.friends } }).toArray();
            res.status(200).send(friends);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Failed to retrieve friends", error);
        res.status(500).send("Internal server error");
    }
});


//CREATE A PLAYLIST ***********************************
app.post("/createPlaylist", async (req, res) => {
    const { playlistName, genre, description, hashtags, userId } = req.body;
    const coverImage = req.file ? req.file.path : req.body.coverImage;

    if (!playlistName || !genre || !description || !userId) {
        return res.status(400).send("Playlist name, genre and description are required");
    }

    try {
        const playlistId = `PL-${Math.random().toString(36).substr(2, 9)}`; // Generate unique playlist ID
        const newPlaylist = {
            playlistId,
            name: playlistName,
            genre,
            description,
            coverImage: coverImage || "https://via.placeholder.com/150", // Optional cover image
            hashtags: hashtags || [],
            numSongs : 0,
            songs: [],
            comments: [],
            createdBy : userId,
            dateCreated : new Date().toISOString(),
        };

        const playListCollection = await getPlaylistCollection();
        const result = await playListCollection.insertOne(newPlaylist);


        const userCollection = await getUserCollection().updateOne(
            { userId: userId },
            { $push: { playlists: newPlaylist.playlistId } } // Add the playlist to the user's playlists array
        );

        console.log("Modified count: ", result.insertedCount, userCollection.modifiedCount);

        if (result.acknowledged > 0 && userCollection.modifiedCount > 0) {
           // res.status(201).send("Playlist created");
              res.status(200).json({ message: "Playlist created successfully", playlistId: playlistId });
        } else {
            //res.status(404).send("User not found");
            //res.status(500).send("Failed to create playlist");
            res.status(400).json({ message: "Failed to create playlist"});
        }
    } catch (error) {
        console.error("Failed to create playlist", error);
        //res.status(500).send("Internal server error");
        res.status(500).json({ message: "Internal server error" });
    }
});


//GET SPECIFIC PLAYLIST
app.get("/api/playlist/:playlistId", async (req, res) => {
    const playlistId = req.params.playlistId;
    console.log("PlaylistID :" , playlistId);

    try {
        const playlist = await getPlaylistCollection().findOne({ playlistId: playlistId });
        if(!playlist.comments){
            playlist.comments = [];
        }
        //fetch user
        const user = await getUserCollection().findOne({userId: playlist.createdBy});
        if (playlist && user) {
            res.status(200).json({playlist, user});
        } else {
           // res.status(404).send("Playlist not found");
              res.status(404).json({ message: "Playlist not found" });
        }
    } catch (error) {
        console.error("Failed to retrieve playlist", error);
        //res.status(500).send("Internal server error");
        res.status(500).json({ message: "Internal server error" });
    }
});

//ADD A COMMENT to a playlist
app.post("/playlist/:playlistId/comment", async (req, res) => {
    const playlistId = req.params.playlistId;
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        //return res.status(400).send("User ID and comment are required");
        return res.status(400).json({ message: "User ID and comment are required" });
    }

    try {
        const result = await getPlaylistCollection().updateOne(
            { playlistId: playlistId },
            { $push: { comments: { userId, comment, date: new Date().toISOString() } } }
        );

        if (result.modifiedCount > 0) {
            const newComment = await getPlaylistCollection().findOne(
                { playlistId: playlistId },
                { projection: { comments: { $elemMatch: { userId, comment } } } }
            );
            res.status(201).json({ message: "Comment added", newComment: newComment.comments[0] });
        } else {
            res.status(404).json({ message: "Playlist not found" });
        }
    } catch (error) {
        console.error("Failed to add comment", error);
        //res.status(500).send("Internal server error");
        res.status(500).json({ message: "Internal server error" });
    }
});

//ADD SONG TO PLAYLIST
app.post("/playlist/:playlistId/song", async (req, res) => {
    const playlistId = req.params.playlistId;
    const { name, artist, link, addedBy } = req.body;

    if(!name || !artist || !link || !addedBy){
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const songId = `SG-${Math.random().toString(36).substr(2, 9)}`;
        const songResult = await getSongCollection().insertOne({
            songId,
            name,
            artist,
            link,
            addedBy,
            dateAdded: new Date().toISOString(),
        })

        const playlistResult = await getPlaylistCollection().updateOne(
            { playlistId: playlistId },
            { $push: { songs: { songId, name, artist} } }
        );
        if (songResult.acknowledged && playlistResult.modifiedCount > 0) {
            res.status(201).json({ message: "Song added to playlist" });
          } else {
            res.status(500).json({ message: "Failed to add song to playlist" });
          }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Update an existing playlist
app.put("/playlist/:playlistId", async (req, res) => {
    const playlistId = req.params.playlistId;
    const updatedPlaylist = req.body;
    try {
      const playlistCollection = await getPlaylistCollection();
      const result = await playlistCollection.updateOne(
        { playlistId: playlistId },
        { $set: updatedPlaylist }
      );
      if (result.acknowledged) {
        res.status(200).json({ success: true, message: "Playlist updated" });
      } else {
        res.status(500).json({ success: false, message: "Failed to update playlist" });
      }
    } catch (error) {
      console.error("Failed to update playlist", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

//DELETE A PLAYLIST 
app.delete("/playlist/:playlistId", async (req, res) => {
    const playlistId = req.params.playlistId;
    try {
        const result = await getPlaylistCollection().deleteOne({ playlistId });
        if (result.deletedCount > 0) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, message: "Playlist not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


//FETCH SPECIFIC SONG
app.get("/api/songs/:songId", async (req, res) => {
    const songId = req.params.songId;
    try {
        const song = await getSongCollection().findOne({ songId: songId });
        if (song) {
            res.status(200).send(song);
        } else {
            res.status(404).send("Song not found");
        }
    } catch (error) {
        console.error("Failed to retrieve song", error);
        res.status(500).send("Internal server error");
    }
});


//DELETE A SONG
// DELETE /api/playlists/:playlistId/songs/:songId
app.delete("/api/playlists/:playlistId/songs/:songId", async (req, res) => {
  const playlistId = req.params.playlistId;
  const songId = req.params.songId;

  try {
    const playlist = await getPlaylistCollection().findOneAndUpdate(
      { playlistId },
      { $pull: { songs: {songId } }},
      { new: true }
    );

    if (playlist) {
      res.status(200).send(playlist);
    } else {
      res.status(404).send("Playlist not found");
    }
  } catch (error) {
    console.error("Failed to delete song from playlist", error);
    res.status(500).send("Internal server error");
  }
});

//GET ALL SONGS FOR HOME AND EXPLORE PAGE
app.get("/songs", async (req, res) => {
    try {
        const songs = await getSongCollection().find().toArray();
        res.send(songs);
    } catch (error) {
        console.error("Failed to retrieve songs", error);
        res.status(500).send("Internal server error");
    }
});

//GET ALL PLAYLISTS FOR HOME AND EXPLORE
app.get("/playlists", async (req, res) => {
    try {
        const playlists = await getPlaylistCollection().find().toArray();
        
        res.send(playlists);
    } catch (error) {
        console.error("Failed to retrieve playlists", error);
        res.status(500).send("Internal server error");
    }
});

//get all PROFILES FOR EXPLORE PAGE
app.get("/profiles", async (req, res) => {
    try {
        const profiles = await getUserCollection().find().toArray();
        res.send(profiles);
    } catch (error) {
        console.error("Failed to retrieve profiles", error);
        res.status(500).send("Internal server error");
    }
});

//ADD SONG TO WEBSITE ROUTE 
app.post("/addSongToWebsite", async (req, res) => {
    const { name, artist, link, addedBy } = req.body;

    if (!name || !artist || !link || !addedBy) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const songId = `SG-${Math.random().toString(36).substr(2, 9)}`;
        const result = await getSongCollection().insertOne({
        songId,
        name,
        artist,
        link,
        addedBy,
        dateAdded: new Date().toISOString(),
      });

     // const songId = result.songId;
      console.log("SONG ID: ", songId)
      const user = await getUserCollection().updateOne(
        { userId: addedBy },
        { $push: { songs: songId } }
      )

      if (result.acknowledged && user.modifiedCount > 0) {
        res.status(201).json({ message: "Song added" });
      } else {
        res.status(500).json({ message: "Failed to add song" });
      }
    } catch (error) {
        console.error("Failed to add song", error);
        res.status(500).json({ message: "Internal server error" });
    }
  });

//splash page
// app.get("/splash", (req, res) => {
//     res.status(200).send("Welcome to the Music App");
// });


//logout
app.post("/logout", (req, res) => {
    res.status(200).send("Logged out");
});

app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));
// Serve index.html for all other routes
app.get('*', (req, res) => {
    // res.sendFile(indexPath);
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}).on('close', async () => {

    //Disconnect
    await client.close();
    console.log('MongoDB connection closed');
});
