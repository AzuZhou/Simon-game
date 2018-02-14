import React, { Component } from 'react'

export default class Blue extends Component {
    onClick = () => {
        sound.play();
        this.props.onClick('blue')
    }

    render() {
        return <button className={this.props.color === 'blue' ? 'blueLightUp' : 'blue'} onClick={this.onClick}></button>
    }
}

let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")

