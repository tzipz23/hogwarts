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

    isFront = (event, pigImage) => {
        console.log(event)
        // debugger
        if (this.state.front === true) {
            event.target.parentElement.innerHTML = <CardFront hogObj={this.props.hogObj} pigImage={pigImage}/>
            this.setState({front: false})
        } else {
            event.target.parentElement.innerHTML = <CardBack hobObj={this.props.hobObj}/>
            this.setState({front: true})
        }
    }

    render() {

        let {name} = this.props.hogObj
        let pigImage = require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)
        
        
        
        return (
                <CardFront name={name} image={pigImage} onClick={this.isFront}/>
            
        )
    }
}

export default Hog;