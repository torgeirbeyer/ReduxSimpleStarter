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

    this.state = { term: ''};
  }
  //syntax for defining methods
  render() { 
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // onInputChange(event) {
  //   console.log(event.target.value
  // }
}

//exporting the searchBar component
export default SearchBar;