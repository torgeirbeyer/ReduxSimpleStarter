//ALWAYS ONLY ONE COMPONENT PER FILE
//import of node and react stuff
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//imprt of own components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//API key for youtube
const API_KEY = 'AIzaSyAgjYJ9Rnu89KGqjihmu_IOcKUdAEoQ4O4';

//create new component
// should produce some HTML

//instaciate the component 
class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    ); // using parenthesis is optional, but the first div must be placed at the first line
  }
}

//Writing JSX that gets traspiled to vanillaJS by babel
  


//take this componenets generated html and put in on the page
//to instaciate the componenent upon rendering, place the JSX tags < and /> around it.
//reactDOM takes two parameters, the component we want to render, and a referanece
//to where we want to render it. here it is the div with class container
//in the index.html
ReactDOM.render(<App />, document.querySelector('.container'));

