import React from "react";
import { Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Feed from "../components/Feed";
import SearchInput from "../components/SearchInput";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            song: null,
            searchTerm: "",
            userId: localStorage.getItem("userId") || null,
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    //Method to handle search term, will eventually filter
    handleSearch = (searchTerm) => {
        //console.log("Search Term: ", searchTerm);
        this.setState({
            searchTerm: searchTerm
        });
    }

    render(){
        if(!this.state.userId){
            return <Navigate to="/splash"/>

        }
        return (
            <div>
                {/* Home */}
                <Navigation/>
                {/* <SearchInput onSearch={this.handleSearch}/> */}
                <Feed searchTerm={this.state.searchTerm}/>
            </div>
        );
    }
}

export default Home;