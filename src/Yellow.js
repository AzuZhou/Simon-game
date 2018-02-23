import React, { Component } from 'react'

export default class Yellow extends Component {
    onClick = () => {
        this.props.onClick('yellow')
    }

    render() {
        return <button className={this.props.color === 'yellow' ? 'yellowLightUp' : 'yellow'} onClick={this.onClick}></button>
    }
}

