import React from 'react';
import QuestionContainer from './QuestionContainer';


function QuestionList ({questions}) {
    const mappedQuestions = questions.map((question,i) => 
        <QuestionContainer 
            key={i}
            question={question.question}
            answer={question.answer}
        />
    )
    return (
        <div>
            {mappedQuestions}
        </div>
    )  
}

export default QuestionList;