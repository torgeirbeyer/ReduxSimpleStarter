//ALWAYS ONLY ONE COMPONENT PER FILE
import React from 'react';
import ReactDOM from 'react-dom';

//create new component
// should produce some HTML

//instaciate the component 
const App = () => {
  //Writing JSX that gets traspiled to vanillaJS by babel
  return <div>Hi there!</div>;
}


//take this componenets generated html and put in on the page
//to instaciate the componenent upon rendering, place the JSX tags < and /> around it.
//reactDOM takes two parameters, the component we want to render, and a referanece
//to where we want to render it. here it is the div with class container
//in the index.html
ReactDOM.render(<App />, document.querySelector('.container'));

