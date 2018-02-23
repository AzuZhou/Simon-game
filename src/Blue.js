import React, { Component } from 'react'

export default class Blue extends Component {
    onClick = () => {
        this.props.onClick('blue')
    }

    render() {
        return <button className={this.props.color === 'blue' ? 'blueLightUp' : 'blue'} onClick={this.onClick}></button>
    }
}

