import React from 'react'
import { useLocation, useNavigate,Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'
import Questions from './Questions'

const HomeMainbar = () => {
   var questionsList = [{ 
       _id: 1,
       upVotes: 3,
       downVotes: 2,
       noOfAnswers: 2,
       questionTitle: "What is a function?",
       questionBody: "It meant to be",
       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
       userPosted: "mano",
       userId: 1,
       askedOn: "jan 1",
       answer: [{
           answerBody: "Answer",
           userAnswered: 'kumar',
           answeredOn: "jan 2",
           userId: 2,
       }]
   },{ 
       _id: 2,
       upVotes: 3,
       downVotes: 2,
       noOfAnswers: 0,
       questionTitle: "What is a function?",
       questionBody: "It meant to be",
       questionTags: ["javascript", "R", "python"],
       userPosted: "mano",
       askedOn: "jan 1",
       userId: 1,
       answer: [{
           answerBody: "Answer",
           userAnswered: 'kumar',
           answeredOn: "jan 2",
           userId: 2,
       }]
   },{ 
       _id: 3,
       upVotes: 3,
       downVotes: 2,
       noOfAnswers: 0,
       questionTitle: "What is a function?",
       questionBody: "It meant to be",
       questionTags: ["javascript", "R", "python"],
       userPosted: "mano",
       askedOn: "jan 1",
       userId: 1,
       answer: [{
           answerBody: "Answer",
           userAnswered: 'kumar',
           answeredOn: "jan 2",
           userId: 2,
       }]
   }]

   const location = useLocation()
   const user = useSelector((state) => (state.currentUserReducer));
   const navigate = useNavigate();
   const redirect = ()=>{
        //alert("Login first!");
        navigate('/Auth');
    }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to={user===null ? redirect() : '/AskQuestions'} className='ask-btn'>Ask Question</Link>
      </div>
      <div>
        {
          questionsList === null ? <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} questions</p>
            {/* <QuestionList questionsList={questionsList} />  */}
            {
              questionsList.map((question) => (
                <Questions question={question} key={question._id}/>
              ))
              }
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar