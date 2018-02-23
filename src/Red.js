import React, { Component } from 'react'

export default class Red extends Component {
    onClick = () => {
        this.props.onClick('red')
    }

    render() {
        return <button className={this.props.color === 'red' ? 'redLightUp' : 'red'} onClick={this.onClick}></button>
    }
}




