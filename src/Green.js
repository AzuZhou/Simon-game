import React, { Component } from 'react'

export default class Green extends Component {
    onClick = () => {
        this.props.onClick('green')
    }

    render() {
        return <button className={this.props.color === 'green' ? 'greenLightUp' : 'green'} onClick={this.onClick}></button>
    }
}

