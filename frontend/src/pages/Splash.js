import React from "react";

//SHOULD INCLUDE THE FORMS FOR LOGIN AND SIGNUP
class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            song: null
        };
    }

    render(){
        return (
            <div>
                Splash
            </div>
        );
    }
}

export default Splash;