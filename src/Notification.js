import React, { Component } from 'react';
import QuestionList from './QuestionList.js';

class Notification extends Component {
    render () {
        return(
            <>
                <QuestionList questions={this.props.questions} />
            </>
        )
    }
}

Notification.defaultProps = {
    type: 'alert alert-info'
}

export default Notification;