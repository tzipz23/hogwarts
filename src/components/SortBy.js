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
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
  
          <div className="field">
            <button className="ui secondary button"
            onClick={this.props.getHogs}>Submit</button>
          </div>
        </div>
      )
    }
  }


export default SortBy; 