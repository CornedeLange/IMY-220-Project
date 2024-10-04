import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            errors:{
                username: "",
                password: ""
            }
        };
        //bind the methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {

        const { name, value} = event.target;
        let errors = this.state.errors;

        // this.setState({
        //     [event.target.name]: event.target.value
        // });

        switch(name){
            case "username":
                errors.username = value.length < 5 ? "Username must be 5 characters long!" : "";
                break;
            case "password":
                errors.password = value.length < 5 ? "Password must be 5 characters long!" : "";
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password, errors } = this.state;

        if(username && password && !errors.username && !errors.password){
            const user = {
                username: this.state.username,
                password: this.state.password
            };
            console.log(user);

            try{
                fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Login successful") {
                        // Save userId to local storage
                        localStorage.setItem("userId", data.userId);
                        localStorage.setItem("username", data.username);
                        // Redirect to dashboard page
                         window.location.href = '/';
                        //this.props.history.push("/");
                    } else {
                        console.error(data.message);
                    }
                })
                .catch(error => console.error('Error:', error));
            }
            catch(error){
                console.error("Error:", error);
            }
        }
        else{
            console.error("Invalid form");
        }


        // const user = {
        //     username: this.state.username,
        //     password: this.state.password
        // };
        // console.log(user);
    }

    render(){
        const { errors } = this.state;
        return (
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    {errors.username && <span className="error">{errors.username}</span>}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <button type="submit">Login</button>
                </form>
            </div>

        );
    }
}

export default Login;