import React, { Component } from 'react';

class Confirmation extends Component{
    render () {
        const { yes, no, hideConfirmation, disableRevealButton } = this.props;
        return (
            <>  
                <div class='alert alert-info text-center'>
                    <p>Are you sure you qant to quit trying?</p>
                    <div className='btn btn-primary' onClick={ () => { yes(); hideConfirmation();  disableRevealButton() } }>Yes</div>
                    <div className='btn btn-danger' onClick={ () => { no(); hideConfirmation() } }>No</div>
                </div>
            </>
        )
    }
}

export default Confirmation;