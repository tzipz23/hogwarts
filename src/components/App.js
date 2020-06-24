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
      sortBy: {
        type: 'all'
      }
    }
  }
    
  
  
  
  changeType = (e) => {
    let type = e.target.value
    this.setState({sortBy: {type: type}})

  }

  getHogs = (e) => {
    console.log()
    if (this.state.sortBy.type === 'all'){
      this.setState({hogs: hogs})
    } else if (this.state.sortBy.type === 'name') {
      this.alphabetizeHogs()
    } else {
      this.weightabetizeHogs() 
    }
    
  }

  alphabetizeHogs = () => {
    let pigs = hogs.map((hog) => {
      hog.sort()
      return hog
    })
    console.log(pigs)
  }

  weightabetizeHogs = () => {

  }

  render() {
    // let pigs =  hogs.map( hog => { <})
    return (
      <div className="App">
        <Nav />
        <SortBy changeType={this.changeType} getHogs={this.getHogs}/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}




export default App;
