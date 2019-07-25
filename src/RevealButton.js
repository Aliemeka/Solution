import React, { Component } from 'react';

class RevealButton extends Component {
    render () {
        return (
            <button 
                disabled={!this.props.enabled}
                onClick={this.props.revealConfirmation}
            > 
                Reveal Answer
            </button>
        )
    }
}

export default RevealButton;