import React, { Component } from 'react';

class RevealButton extends Component {
    render () {
        return (
                <button className="btn btn-primary"
                    disabled={!this.props.enabled}
                    onClick={this.props.revealConfirmation}
                > 
                    Reveal Answer
                </button>
        )
    }
}

export default RevealButton;