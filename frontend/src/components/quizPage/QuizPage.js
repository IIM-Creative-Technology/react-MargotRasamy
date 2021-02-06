import React, { useState, useEffect } from 'react'
import QuizScore from './QuizScore'
import axios from 'axios'
import LoaderSpinner from '../LoaderSpinner'

function QuizPage({match}) {
    const quizParams = match.params.manga
    const [quizDatas, setQuizDatas] = useState(null);
    const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [userFinalScore, setUserScore] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:1234/quiz-details/${quizParams}`).then(res => {
            setQuizDatas(res.data)
            console.log(res.data)
        })
    }, []);

    const handleClick = (e, userChoice, rightAnswer) => {
        e.preventDefault()
        if (quizIsNotDone()) {
            setQuizQuestionIndex(quizQuestionIndex + 1)
            userResponses.push(userChoice) // TODO change use setUserResponses
            console.log(userResponses)
            if (userChoice.label === rightAnswer) {
                setUserScore(userFinalScore + 1)   
            }
        }
    }

    const isLoaderSpinnerWrapper = () => {
        return !quizDatas ? 'loader-wrapper' : ''
    }

    const quizIsNotDone = () => {
        return quizQuestionIndex < quizDatas.quizDetails.length
    }

    function randomArrayShuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    return (
    <div className={`quiz-page ${isLoaderSpinnerWrapper()}`}>
        { !quizDatas
            ? <LoaderSpinner />
            : (quizIsNotDone())
            ? <>
                <h2>{quizDatas.quizName}</h2>
                <div className="question">
                    { quizDatas.quizDetails[quizQuestionIndex].question }
                </div>
                <form className="responses-list">
                    {
                        randomArrayShuffle(quizDatas.quizDetails[quizQuestionIndex].responses).map((responseCard, index) => {
                            return <button type="button" onClick={(e) => handleClick(e, responseCard, quizDatas.quizDetails[quizQuestionIndex].answer)} key={index} className="response">{responseCard.response}</button>
                        })
                    }
                </form>
            </>
            : <QuizScore userScore={userFinalScore} scoreRatio={quizDatas.quizDetails.length} />
        }          
    </div>
    );
}

export default QuizPage;