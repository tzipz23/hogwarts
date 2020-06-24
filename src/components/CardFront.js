import React, { Component } from "react";


class CardFront extends Component {


    render(){
        console.log(this.props)
        return(
            <div className='pigTile'>
                {this.props.name}
                <br/>
                <img src={this.props.image} alt='hog'/>
            </div>
        )


    }



}



export default CardFront;