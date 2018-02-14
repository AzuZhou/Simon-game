import React, { Component } from 'react'

export default class Green extends Component {
    onClick = () => {
        sound.play()
        this.props.onClick('green')
    }

    render() {
        return <button className={this.props.color === 'green' ? 'greenLightUp' : 'green'} onClick={this.onClick}></button>
    }
}

let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")