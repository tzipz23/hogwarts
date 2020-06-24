import React, { Component } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

class Hog extends Component {

    constructor() {
        super()
    
        this.state = {
          front: true
        }
      }

    render() {

        let {name, specialty, greased, weight} = this.props.hogObj
        let pigImage = require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)
       
        
        
        return (
            <div className='pigTile' onClick= {this.props.renderClick}>
                
                {name}
                    <br/>
                <img src={pigImage} alt='hog'/>
            </div>
            <div>
                {specialty}
                {greased}
                {weight}
            </div>
        )
    }
}

export default Hog;