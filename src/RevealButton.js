import React from 'react';

function RevealButton ({enabled, revealConfirmation}) {
    return (
            <div className='text-center'>
                <button className="btn btn-primary"
                    disabled={!enabled}
                    onClick={revealConfirmation}
                > 
                    Reveal Answer
                </button>
            </div>

    )
}

export default RevealButton;