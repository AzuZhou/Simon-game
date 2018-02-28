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
            autoPlay: false,
            display: false,
            won: false
        }
    }

    next = () => {
        let colors = ['red', 'blue', 'green', 'yellow']
        this.setState({
            history: this.state.history.concat(colors[getRandom()])
        })
    }

    on = (value) => {
        if (value && this.state.started) {
            this.setState({
                display: true
            })
        } else {
            this.setState({
                display: false
            })
        }
    }

    started = () => {
        this.setState({
            started: true,
            autoPlay: true,
            history: [],
            won: false
        }, () => { this.next() })
    }

    stop = () => {
        this.setState({
            started: false
        })
    }

    check = (color) => {
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
            if (this.state.userHistory.length === 20) {
                this.setState({
                    won: true
                }, () => { this.restart() })
            } else {
                this.setState({
                    autoPlay: true,
                    userHistory: []
                })
                this.next()
            }
        }
    }

    stopAutoPlay = () => {
        this.setState({
            autoPlay: false
        })
    }

    stopError = () => {
        this.setState({
            wrong: false
        })
    }

    finished = (value) => {
        this.setState({
            display: value
        })
    }

    restart = () => {
        setTimeout(function () {
            this.started()
        }.bind(this), 1000)
    }

    render() {
        return (
            <div className='main' style={{ pointerEvents: this.state.display ? 'auto' : 'none' }}>
                <Buttons
                    history={this.state.history}
                    userHistory={this.state.userHistory}
                    started={this.state.started}
                    stop={this.stop}
                    check={this.check}
                    autoPlay={this.state.autoPlay ? true : false}
                    stopAutoPlay={this.stopAutoPlay}
                    finished={this.finished}
                />
                <Controls
                    next={this.next}
                    started={this.started}
                    history={this.state.history}
                    error={this.state.wrong}
                    stopError={this.stopError}
                    on={this.on}
                    won={this.state.won}
                // restart={this.restart}
                />
            </div>
        )
    }
}

function getRandom() {
    return Math.floor(Math.random() * Math.floor(4))
}









