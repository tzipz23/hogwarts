import React, { Component } from "react";


class Hog extends Component {

    renderClick = () => {
        
    }

    render() {
        let {name, specialty, greased, weight} = this.props.hogObj
        let pigImage = require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)
       
        
        
        return (
            <div className='pigTile' onClick={this.props.hogObj.renderClick}>
                
                {name}
                    <br/>
                <img src={pigImage} alt='hog'/>
            </div>
        )
    }
}

export default Hog;