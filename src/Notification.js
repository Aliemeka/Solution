import React from 'react';
import QuestionList from './QuestionList.js';

function Notification ({questions}) {
        return(
            <>
                <QuestionList questions={questions} />
            </>
        )
}

export default Notification;