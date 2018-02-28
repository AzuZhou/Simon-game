import React, { Component } from 'react'

export default class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            on: false,
            step: ''
        }
    }

    onClick = () => {
        if (!this.state.on) {
            this.setState({
                on: true,
                step: '- -'
            })
        } else {
            this.setState({
                on: false,
                step: ''
            })
        }
    }

    onStart = () => {
        this.props.started()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.history !== this.props.history) {
            if (nextProps.history.length === 0) {
                number = 0
            } else {
                number++
                if (number.toString().length === 1) {
                    this.setState({
                        step: '0'.concat(number)
                    })
                } else {
                    this.setState({
                        step: number
                    })
                }
            }
        }
        if (this.props.error) {
            this.setState({
                step: '! !'
            })
            setTimeout(function () {
                if (number.toString().length === 1) {
                    this.setState({
                        step: '0'.concat(number)
                    })
                } else {
                    this.setState({
                        step: number
                    })
                }
            }.bind(this), 1000)
            this.props.stopError()
        }
    }

    render() {
        return (
            <div className='controls' style={{ pointerEvents: this.state.on ? 'auto' : 'none' }}>
                <h1>Simon</h1>
                <div className='controls-buttons'>
                    <div className='counter'>
                        <div id='counter'>{this.state.step}</div>
                        <h4>COUNT</h4>
                    </div>
                    <div className='start' onClick={this.onStart}>
                        <button id='start'></button>
                        <h4>START</h4>
                    </div>
                    <div className='strict'>
                        <div className='led'></div>
                        <button id='strict'></button>
                        <h4>STRICT</h4>
                    </div>
                </div>
                <div className='switch'>
                    <h4>ON</h4>
                    <button className='on-off' onClick={this.onClick}>
                        <div className={this.state.on ? 'off' : 'on'} ></div>
                        < div className={this.state.on ? 'on' : 'off'}></div>
                    </button>
                    <h4>OFF</h4>
                </div>
            </div>
        )
    }
}

let number = 0





