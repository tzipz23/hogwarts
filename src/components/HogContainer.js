import React, { Component } from "react";
import Hog from './Hog'


class HogContainer extends Component{

    render(){
        let piggie = this.props.hogs.map(hog => <Hog hogObj={hog} renderClick={this.props.renderClick} />)
        return(
            <div>{piggie}</div>
        )




    }

}



export default HogContainer;