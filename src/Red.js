import React, { Component } from 'react'

export default class Red extends Component {
    onClick = () => {
        sound.play()
        this.props.onClick('red')
    }

    render() {
        return <button className={this.props.color === 'red' ? 'redLightUp' : 'red'} onClick={this.onClick}></button>
    }
}

let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")



