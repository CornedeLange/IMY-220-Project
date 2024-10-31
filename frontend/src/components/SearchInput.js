import React from "react";
import "../styles/SearchInput.css";

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        };

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const searchTerm = this.state.searchTerm;
        if(searchTerm.startsWith("#")){
            this.props.onHashtagSearch(searchTerm.substring(1));
        }
        else{
            this.props.onSearch(searchTerm);
        }
    }

    render(){
        return (
            <div className="search-input">
                <form onSubmit={this.handleSubmit} className="form">
                    {/* SearchInput */}
                    <label className="search-label">Search</label>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} placeholder="Search..." className="search-input-field"/>
                    {/* button to clear input and activate search again */}
                    {/* <button type="reset" className="button">Clear</button> */}
                    <button type="submit" className="button">Search</button>
                </form>

            </div>
        );
    }
}

export default SearchInput;