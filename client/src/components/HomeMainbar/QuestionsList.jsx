import React from 'react'
import Questions from './QuestionsList'
const QuestionsList = ({QuestionsList}) =>{

    return(
        <>
        {
            QuestionsList.map((question) =>(
                <Questions question={question} key={question.id}/>
            ))  
        }
        </>
    )
}

export default QuestionsList