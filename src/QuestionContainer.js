import React, { Component } from 'react';
import RevealButton from './RevealButton';
import Answer from './Answer.js';
import Confirmation from './Confirmation.js';

class QuestionContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
            revealAnswer: false,
            revealButton: true,
            revealConfirmation: false,
        }
    }

    yes = () => {
        this.setState(
            { revealAnswer: true }
        )
    }

    no = () => {
        this.setState(
            { revealAnswer: false }
        )
    }

    disableRevealButton = () => {
        this.setState({
            revealButton: false
        })    
    }

    revealConfirmation = () => {
        this.setState({
            revealConfirmation: true
        })
    }

    hideConfirmation = () => {
        this.setState({
            revealConfirmation: false
        })
    }

    render () {
        const {question, answer} = this.props;
        return (
            <>
                <p>{question}</p>
                <RevealButton 
                    revealConfirmation={this.revealConfirmation}
                    enabled={this.state.revealButton} 
                />
                {
                    this.state.revealConfirmation ?
                        <Confirmation 
                            yes={this.yes} 
                            no={this.no} 
                            hideConfirmation={this.hideConfirmation}
                            disableRevealButton={this.disableRevealButton}
                        />
                    :   null
                }
                {
                    this.state.revealAnswer ?
                        <Answer answer={answer} />
                    :   null
                }
            </>
        )
    }
}

export default QuestionContainer;