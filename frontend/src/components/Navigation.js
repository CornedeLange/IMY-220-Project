import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../public/assests/images/Logo.png"
import "../styles/Navigation.css";

class Navigation extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         song: null
    //     };
    // }
    render(){
        return (
            <header className="header" >
                <img src={Logo} className="logo"/>
                <nav >
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/explore">Explore</Link>  
                        </li>
                        <li>
                            <Link to="/playlist/:playlistId">Playlists</Link>
                        </li>
                        <li>
                            <Link to="/profile/:userId">Profile</Link>
                        </li>
                        <li>
                            <Link to="/splash">Splash</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigation;