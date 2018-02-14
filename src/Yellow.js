import React, { Component } from 'react'

export default class Yellow extends Component {
    onClick = () => {
        sound.play()
        this.props.onClick('yellow')
    }

    render() {
        return <button className={this.props.color === 'yellow' ? 'yellowLightUp' : 'yellow'} onClick={this.onClick}></button>
    }
}

let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")