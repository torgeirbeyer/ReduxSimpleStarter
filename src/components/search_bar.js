import React, { Component } from "react";

// a functional react component,
// it is a function which outputs JSX
// const SearchBar = () => {
//   return <input />;
// };

// refactored to a class component
// define a new class called SearchBar and 
//give it access to all funcitonalty in React.Component class
//Component is moved up to the import, and we can clean up the code a bit.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  //syntax for defining methods
  render() {
    // we always manipulate the state with this.setState function
    return (
      <div className='search-bar'>
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    ); 
  }
  
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//exporting the searchBar component
export default SearchBar;