import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Logo from "../../public/assests/images/Logo.png";
import Background from "../../public/assests/images/splash_background.jpg";
import "../styles/Splash.css";
// import Background from "../../public/assests/images/splash_background.jpg";

//SHOULD INCLUDE THE FORMS FOR LOGIN AND SIGNUP
class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickedLogin: false,
            clickedSignup: false
        };
        //bind methods
        this.showLogin = this.showLogin.bind(this);
        this.showSignup = this.showSignup.bind(this);
    }

    //methods to show login or sign up forms
    showLogin = () => {
        this.setState({
            clickedLogin: true, clickedSignup: false
        });
    }

    showSignup = () => {
        this.setState({
            clickedSignup: true, clickedLogin: false
        });
    }


    render(){
        return (
            <div className="splash-page" style={{ "--background-image": `url(${Background})` }}>
                {/* Splash */}
                {/* Logo will be here */}
                <img src={Logo} alt="logo" className="logo-image"/>

                <h1 className="heading">Welcome to TUNELIST</h1>
                <h2 className="heading-2">The Perfect Place To Share Your Taste with Friends and Family </h2>
                <h3 className="heading-3">Start Sharing Your PlayList Now!</h3>

                <div className="signin-container">
                    <div className="login-signup-buttons">
                        <button className="login-button" onClick={this.showLogin}>Login</button>
                        <button className="signup-button" onClick={this.showSignup}>Sign Up</button>
                    </div>
                    <div className="form-container">
                        {this.state.clickedLogin ? <Login/> : null}
                        {this.state.clickedSignup ? <SignUp/> : null}
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Splash;