import React, { useState, useEffect } from 'react';
import QuizCategory from './QuizCategory'
import axios from 'axios'
import LoaderSpinner from '../LoaderSpinner'

function QuizList() {
  const [quizList, setQuizList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:1234/quiz-list').then(res => {
      setQuizList(res.data)
      setLoading(false)
    })
  });

  const isLoaderSpinnerWrapper = (loading) => {
    return loading ? 'loader-wrapper' : null
  }

  return (
    <div className={`quiz-list ${isLoaderSpinnerWrapper(loading)}`}>
      { loading && !quizList
          ? <LoaderSpinner />
          : quizList.map((quizData, index) => { return <QuizCategory key={index} quiz={quizData} /> })
        }
    </div>
  );
}
  
export default QuizList;