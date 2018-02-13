import React, { Component } from 'react'

export default class Controls extends Component {
    render() {
        return (
            <div className='controls'>
                <h1>Simon</h1>
                <div className='controls-buttons'>
                    <div className='counter'>
                        <h2 id='counter'></h2>
                        <h4>COUNT</h4>
                    </div>
                    <div className='start'>
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
                    <div className='on-off'>
                        <div className='on'></div>
                        <div className='off'></div>
                    </div>
                    <h4>OFF</h4>
                </div>
            </div>
        )
    }
}