import React, { Component } from 'react'
import Buttons from './Buttons'
import Controls from './Controls'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [],
            started: false,
            userHistory: [],
            wrong: false,
            autoPlay: false
        }
    }

    next = () => {
        let colors = ['red', 'blue', 'green', 'yellow']
        this.setState({
            history: this.state.history.concat(colors[getRandom()])
        })
    }

    started = () => {
        this.setState({
            started: true
        })
    }

    stop = () => {
        this.setState({
            started: false
        })
    }

    wrong = (color) => {
        this.setState({
            userHistory: this.state.userHistory.concat(color)
        }, () => { this.compareArrays() })
    }

    compareArrays = () => {
        let correct
        for (let i = 0; i < this.state.userHistory.length; i++) {
            if (this.state.userHistory[i] !== this.state.history[i]) {
                this.setState({
                    wrong: true,
                    autoPlay: true,
                    userHistory: []
                })
                correct = false
            } else {
                correct = true
            }
        }
        if (correct && this.state.userHistory.length === this.state.history.length) {
            this.setState({
                autoPlay: true,
                userHistory: []
            })
            this.next()
        }
    }

    stopAutoPlay = () => {
        this.setState({
            autoPlay: false
        })
    }

    render() {

        return (
            <div className='main'>
                <Buttons history={this.state.history} started={this.state.started} stop={this.stop} wrong={this.wrong} autoPlay={this.state.autoPlay ? true : false} stopAutoPlay={this.stopAutoPlay} />
                <Controls next={this.next} started={this.started} />
            </div>
        )
    }
}

function getRandom() {
    return Math.floor(Math.random() * Math.floor(4))
}

