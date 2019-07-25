import React, { Component } from 'react';

class Confirmation extends Component{
    render () {
        const { yes, no, hideConfirmation, disableRevealButton } = this.props;
        return (
            <>
                <p>Are you sure you qant to quit trying?</p>
                <button onClick={ () => { yes(); hideConfirmation();  disableRevealButton() } }>Yes</button>
                <button onClick={ () => { no(); hideConfirmation() } }>No</button>
            </>
        )
    }
}

export default Confirmation;