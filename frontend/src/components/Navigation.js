import React from "react";
import {Link, withRouter} from "react-router-dom";
import Logo from "../../public/assests/images/Logo.png"
import "../styles/Navigation.css";

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        };
    }

    handleLogout = () => {
        localStorage.clear();
        this.setState({isLoggedIn: false});
        //window.location.href = "/splash";
        //this.props.history.push("/splash");
        window.location.href = '/splash';
    }

    componentDidMount(){
        const userId = localStorage.getItem("userId");
        if(userId){
            this.setState({isLoggedIn: true});
        }
    }
    render(){

        const userId = localStorage.getItem("userId");
        return (
            <header className="header" >
               <Link to="/"> <img src={Logo} className="logo"/> </Link>
                <nav >
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/explore">Explore</Link>  
                        </li>
                        {/* <li>
                            <Link to="/playlist/:playlistId">Playlists</Link>
                        </li> */}
                        <li>
                            <Link to={`/profile/${userId}`}>Profile</Link>
                        </li>
                        <li>
                            {/* <Link to="/splash">Splash</Link> */}
                            {this.state.isLoggedIn ? (
                                    <button onClick={this.handleLogout}>Logout</button>
                                ) : (
                                    <Link to="/splash">Splash</Link>
                                )}
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigation;