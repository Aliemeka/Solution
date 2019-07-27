import React from 'react';

function  Confirmation ({yes, no, hideConfirmation, disableRevealButton}) {
    return (
        <>  
            <div class='alert alert-info text-center'>
                <p>Are you sure you want to quit trying?</p>
                <div className='btn btn-primary mr-1' onClick={ () => { yes(); hideConfirmation();  disableRevealButton() } }>Yes</div>
                <div className='btn btn-danger' onClick={ () => { no(); hideConfirmation() } }>No</div>
            </div>
        </>
    )
}

export default Confirmation;