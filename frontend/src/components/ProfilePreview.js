import React from "react";

class ProfilePreview extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {
                profile: null
            };
        }
    
        render(){
            return (
                <div>
                    Profile Preview
                </div>
            );
        }
}

export default ProfilePreview ;
