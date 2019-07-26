import React, { Component } from 'react';
import Notification from './Notification.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            type: [
                { success: 'alert alert-success'},
                { message: 'alert alert-info'},
                { caution: 'alert alert-caution'},
                { error: 'alert alert-error'}
            ],
            questions: [
                {question:'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
                  answer: '5 cents'},
                {question:'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
                  answer: '5 minutes'},
                {question:'In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?',
                  answer: '47 days'}
            ]
        }

    }
    render () {
        return (
            <>
                <div className='container'>
                    <Notification type={this.state.type} questions={this.state.questions}/>
                </div>
            </>
        )
    }
}


export default App;
