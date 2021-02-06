import React, { useState, useEffect } from 'react';
import axios from 'axios'
import LoaderSpinner from '../LoaderSpinner'

function QuizPage({match}) {
    const quizParams = match.params.manga
    const [quizDatas, setQuizDatas] = useState(null);
    const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:1234/quiz-details/${quizParams}`).then(res => {
            setQuizDatas(res.data)
            console.log(res.data)
        })
    }, []);

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setQuizQuestionIndex(quizQuestionIndex + 1)
    //     userResponses.push()
    // }

    const handleClick = (e) => {
        e.preventDefault()
        setQuizQuestionIndex(quizQuestionIndex + 1)
        userResponses.push()
    }

    const isLoaderSpinnerWrapper = () => {
        return !quizDatas ? 'loader-wrapper' : null
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

    const submitLastButtonType = () => {
        return quizQuestionIndex === quizDatas.quizDetails.length - 1 ? 'submit' : 'button'
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
                <form  className="responses-list">
                    {
                        randomArrayShuffle(quizDatas.quizDetails[quizQuestionIndex].responses).map((responseCard, index) => {
                            return <button type={submitLastButtonType()} onClick={(e) => {handleClick(e)}} key={index} className="response">{responseCard.response}</button>
                        })
                    }
                </form>
            </>
            : <>
                <h1>Quiz done</h1>
            </>
        }          
    </div>
    );
}

export default QuizPage;