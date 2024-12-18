import React from "react";
import "../styles/SignUp.css";

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            errors:{
                username: "",
                password: "",
                email: "",
                form: ""
            }  
        };
        //bind methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        // this.setState({
        //     [event.target.name]: event.target.value
        // });

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch(name){
            case "username":
                //errors.username = value.length === 0 ? "Username is required" : "";
                errors.username = value.length < 5 ? "Username must be at least 5 characters long" : "";
                break;
            case "password":
                errors.password = value.length < 6 ? "Password must be at least 5 characters long" : "";
                break;
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errors.email = !emailRegex.test(value) ? "Email is not valid" : "";
                break;
            default:
                break;
        }

        this.setState({[name]: value, errors});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const user = {
        //     username: this.state.username,
        //     password: this.state.password,
        //     email: this.state.email
        // };
        // console.log(user);

        const { username, password, email, errors } = this.state;

        if (username && password && email && !errors.username && !errors.password && !errors.email) {
            const user = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            };
            console.log(user);

            try{
                fetch("/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === "User registered") {
                        // Redirect to login page
                        // window.location.href = '/splash';
                        this.props.onSignupComplete();
                    } else {
                        //console.error(data);
                        this.setState({errors: {...errors, form: data.message}});
                    }
                })
                .catch(error =>{
                    //console.error('Error:', error);
                    this.setState({errors: {...errors, form: "An error occurred during signup, please try again."}});
                } );
            } catch (error) {
                console.error("Error", error);
                this.setState({errors: {...errors, form: "An error occurred during signup, please try again"}});
            }
        } else {
            console.log("Form has errors.");
        }
    }


    render(){
        const { errors } = this.state;
        return (
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                    {errors.username && <span className="error">{errors.username}</span>}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <button type="submit" onClick={this.handleSubmit}>Sign Up</button>
                    {errors.form && <span className="error">{errors.form}</span>}
                    <p style={{color: 'blue', fontWeight: 'bold', marginTop: '10px'}}>Note: Please login in after signing up!</p>
                </form>
            </div>

        );
    }
}

export default SignUp;