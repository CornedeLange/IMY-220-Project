import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         song: null
    //     };
    // }

    render(){
        return (
            <header>
                {/* LOGO SHOULD GO HERE */}
                {/* <img src="."/> */}
                <img src="../public/images/Logo.png"></img>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/songs">Songs</Link>
                        </li>
                        <li>
                            <Link to="/playlists">Playlists</Link>
                        </li>
                        <li>
                            <Link to="/profiles">Profiles</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigation;