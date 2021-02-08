import React, { useState, useEffect } from 'react';
import QuizCategory from './QuizCategory'
import axios from 'axios'
import LoaderSpinner from '../LoaderSpinner'

function QuizList() {
  const [quizList, setQuizList] = useState(null);

  useEffect(() => {
    axios.get('https://otakuiz.herokuapp.com/quiz-list').then(res => {
      setQuizList(res.data)
    })
  }, []);

  const isLoaderSpinnerWrapper = () => {
    return !quizList ? 'loader-wrapper' : ''
  }

  return (
    <div id="quiz-list" className={`quiz-list ${isLoaderSpinnerWrapper()}`}>
      { !quizList
          ? <LoaderSpinner />
          : quizList.map((quizData, index) => { return <QuizCategory key={index} quiz={quizData} /> })
      }
    </div>
  );
}
  
export default QuizList;