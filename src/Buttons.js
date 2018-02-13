import React, { Component } from 'react'
import Red from './Red'
import Blue from './Blue'
import Yellow from './Yellow'
import Green from './Green'

export default class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            lastColor: '',
            history: []
        }
    }

    clickHandler = (color) => {
        this.setState({
            lastColor: color.target.value
        })
    }

    render() {
        return (
            <div className='buttons'>
                <div className='top-buttons'>
                    <Green onClick={this.clickHandler} />
                    <Red onClick={this.clickHandler} />
                </div>
                <div className='bottom-buttons'>
                    <Yellow onClick={this.clickHandler} />
                    <Blue onClick={this.clickHandler} />
                </div>
            </div>
        )
    }
}