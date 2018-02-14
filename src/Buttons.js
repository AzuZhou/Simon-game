import React, { Component } from 'react'
import Red from './Red'
import Blue from './Blue'
import Yellow from './Yellow'
import Green from './Green'

export default class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastColor: '',
            history: [],
            lightUpColor: ''
        }
    }

    lightUp = (color) => {
        this.setState({
            lightUpColor: color
        })
        setTimeout(function () {
            this.setState({
                lightUpColor: ''
            })
        }.bind(this), 500)
    }

    render() {
        return (
            <div className='buttons'>
                <div className='top-buttons'>
                    <Green onClick={this.lightUp} color={this.state.lightUpColor} />
                    <Red onClick={this.lightUp} color={this.state.lightUpColor} />
                </div>
                <div className='bottom-buttons'>
                    <Yellow onClick={this.lightUp} color={this.state.lightUpColor} />
                    <Blue onClick={this.lightUp} color={this.state.lightUpColor} />
                </div>
            </div>
        )
    }
}