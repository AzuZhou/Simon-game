import React, { Component } from 'react'
import Buttons from './Buttons'
import Controls from './Controls'

export default class Game extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div className='main'>
                <Buttons />
                <Controls />
            </div>
        )
    }
}
