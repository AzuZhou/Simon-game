import React, { Component } from 'react'

export default class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            on: false,
            step: '',
            strict: false
        }
    }

    onClick = () => {
        if (!this.state.on) {
            this.setState({
                on: true,
                step: '- -'
            })
            this.props.on(true)
        } else {
            this.setState({
                on: false,
                step: ''
            })
            this.props.on(false)
        }
    }

    onStart = () => {
        this.props.started()
    }

    onStrict = () => {
        this.setState({
            strict: !this.state.strict
        })
        this.props.strict(!this.state.strict)
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
                        <div id='counter'>{this.props.won ? '* *' : this.state.step}</div>
                        <h4>COUNT</h4>
                    </div>
                    <div className='start' onClick={this.onStart}>
                        <button id='start'></button>
                        <h4>START</h4>
                    </div>
                    <div className='strict' onClick={this.onStrict}>
                        <div className={this.state.strict ? 'ledOn' : 'led'}></div>
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
// let time = 0
// if (time === 0) {
            //     time++
            //     this.props.strict(this.state.strict)
            // }




            // if (this.state.strict) {
            //     this.props.strict()
            // }


            // if (time === 0) {
            //     time++
            //     this.props.strict(this.state.strict)
            // }