import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";
import Playlist from "./pages/Playlist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/splash",
        element: <Splash/>

    },
    {
        path: "/playlist",
        element: <Playlist/>
    }
])

class App extends React.Component{
    render(){
        return (
            <RouterProvider router={router}>
                <Navigation />
            </RouterProvider>
        );
    }
}

export default App;