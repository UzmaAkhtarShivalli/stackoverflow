import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = ()  => {

    var questionsList = [{
        id: 1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "mano",
        askedOn: "jan 1"
    },{
        id: 2,
        votes: 0,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1" 
    },{
        id: 3,
        votes: 1,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1"
    }]

        const location = useLocation()

    return(
        <div className='min-bar'>
            <div className='min-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Question</h1>
                }
                <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link>
            </div>
            <div>
                {
                    questionsList === null ?
                    <h1>Loading...</h1> :
                    <>
                    <p>{ questionsList.length } questions</p>
                    <questionsList questionsList={questionsList} />
                    </>
                }
            </div>

        </div>
    )
 }

 export default HomeMainbar