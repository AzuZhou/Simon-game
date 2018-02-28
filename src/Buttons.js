import React, { Component } from 'react'
import Red from './Red'
import Blue from './Blue'
import Yellow from './Yellow'
import Green from './Green'

export default class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lightUpColor: '',
            history: []
        }
    }

    lightUp = (color) => {
        this.setState({
            lightUpColor: color
        })
        if (color === 'red') {
            red.play()
        } else if (color === 'blue') {
            blue.play()
        } else if (color === 'yellow') {
            yellow.play()
        } else if (color === 'green') {
            green.play()
        }
        setTimeout(function () {
            this.setState({
                lightUpColor: ''
            })
        }.bind(this), 1000)
    }

    play = () => {
        let i = 0
        setTimeout(function () {
            let interval = setInterval(() => {
                this.lightUp(this.state.history[i])
                i++
                if (i >= this.state.history.length) {
                    clearInterval(interval)
                    setTimeout(function () {
                        this.props.finished(true)
                    }.bind(this), 200)
                }
            }, 1200)
        }.bind(this), 500)
    }

    onPress = (color) => {
        this.lightUp(color)
        this.props.check(color)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.started !== this.props.started || nextProps.started) {
            this.props.finished(false)
            this.play()
            this.props.stop()
        }
        this.setState({
            history: this.props.history
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.autoPlay !== this.props.autoPlay || this.props.autoPlay === 'true') {
            this.play()
            this.props.stopAutoPlay()
        }
    }

    render() {
        return (
            <div className='buttons'>
                <div className='top-buttons'>
                    <Green onClick={this.onPress} color={this.state.lightUpColor} />
                    <Red onClick={this.onPress} color={this.state.lightUpColor} />
                </div>
                <div className='bottom-buttons'>
                    <Yellow onClick={this.onPress} color={this.state.lightUpColor} />
                    <Blue onClick={this.onPress} color={this.state.lightUpColor} />
                </div>
            </ div>
        )
    }
}

let red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
let blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
let yellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
let green = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")


