## States
- plain javascript object used to record and react user events.
- each class based componenet has its own state object
- forces the component (and child components) to re-render when the state is changed
- needs to be initialized before we use it
- needs to be initialized within the contructor of the component
- example

´´´javascript
class SearchBar extends Component {
constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  ```

- this.state = { term: ''} is initilizing it


## Constructor
- is autmatically called when a new instance is called upon

