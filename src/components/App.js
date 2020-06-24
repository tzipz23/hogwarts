import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import SortBy from "./SortBy";
import HogContainer from "./HogContainer";



class App extends Component {
  
  constructor() {
    super()

    this.state = {
      hogs: [],
      filters: {
        type: 'all'
      }
    }
  }
    
  
  
  
  changeType = (e) => {
    let type = e.target.value
    this.setState({filters: {type: type}})
  }

  render() {
    // let pigs =  hogs.map( hog => { <})
    return (
      <div className="App">
        <Nav />
        <SortBy changeType={this.changeType}/>
        <HogContainer />
      </div>
    );
  }
}




export default App;
