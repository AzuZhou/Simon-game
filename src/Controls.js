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
        this.props.started(true)
        this.props.next()
        this.setState({
            step: 1
        })
    }

    showError = () => {
        return '! !'
    }

    show = () => {
        if (this.props.error) {
            return this.showError()
        } else {
            if (typeof (this.state.step) === 'number') {
                if (this.state.step.toString().length === 1) {
                    return '0'.concat(this.state.step)
                } else {
                    return this.state.step
                }
            } else {
                return this.state.step
            }
        }
    }

    render() {

        // console.log(this.state.step)
        return (
            <div className='controls'>
                <h1>Simon</h1>
                <div className='controls-buttons'>
                    <div className='counter'>
                        <div id='counter'>{this.show()}</div>
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
                        <div className='on'></div>
                        <div className='off'></div>
                    </button>
                    <h4>OFF</h4>
                </div>
            </div>
        )
    }
}

