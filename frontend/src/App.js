import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";
import Playlist from "./pages/Playlist";
// import AddSongToWebsite from "./components/AddSongToWebsite";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/profile/:userId",element: <Profile/>},
    { path: "/splash", element: <Splash/> },
    { path: "/playlist/:playlistId", element: <Playlist/>},
    { path: "/explore", element: <Explore/>}
    // { path: "/addSongWebsite", element: <AddSongToWebsite/>}
])

class App extends React.Component{
    render(){
        return (
            <RouterProvider router={router}>
                {/* <Navigation /> */}
            </RouterProvider>
        );
    }
}

export default App;