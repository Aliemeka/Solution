import React, { Component } from 'react';

class RevealButton extends Component {
    render () {
        return (
                <div className='text-center'>
                    <button className="btn btn-primary"
                        disabled={!this.props.enabled}
                        onClick={this.props.revealConfirmation}
                    > 
                        Reveal Answer
                    </button>
                </div>

        )
    }
}

export default RevealButton;