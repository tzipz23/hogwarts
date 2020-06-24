import React, { Component } from "react";



class SortBy extends Component {
    render() {
      return (
        <div className="ui form">
          <h3>Hogs</h3>
          <div className="field">
            <select name="type" id="type"
            onChange={this.props.changeType}>
              <option value="all">All</option>
              <option value="cat">Name</option>
              <option value="micropig">Weight</option>
            </select>
          </div>
  
          <div className="field">
            <button className="ui secondary button"
            onClick={this.props.getPets}>Submit</button>
          </div>
        </div>
      )
    }
  }


export default SortBy; 