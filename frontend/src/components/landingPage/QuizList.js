import React, { useState, useEffect } from 'react';
import QuizCategory from './QuizCategory'
import axios from 'axios'
import LoaderSpinner from '../LoaderSpinner'

function QuizList() {
  const [quizList, setQuizList] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1234/quiz-list').then(res => {
      setQuizList(res.data)
    })
    // axios.post('http://localhost:1234/quiz/create',
    // {
    //   quizCategory : {
    //     "quizName": "Fullmetal alchemist",
    //     "quizLabel": "code-geass",
    //     "caption": "Prêt à défier les britanniens ? Yes, my lord !",
    //     "image": "code-geass",
    //     "path": "fullmetal"
    //   },
    //   quizDetails: {
    //     "quizName": "Fullmetal alchemist",
    //     "quizLabel": "fullmetal",
    //     "quizDetails": [
    //       {
    //         "question": "Pour quelle raison Eren pleure-t-il au début du manga/animé ?",
    //         "answer": "B",
    //         "responses": [
    //           {
    //             "label": "A",
    //             "response": "Il vient de se battre avec des garçons du même âge."
    //           },
    //           {
    //             "label": "B",
    //             "response": "Il a fait un cauchemar."
    //           },
    //           {
    //             "label": "C",
    //             "response": "Mikasa vient de lui mettre une râclée."
    //           },
    //           {
    //             "label": "D",
    //             "response": "Ses parents viennent de le remettre en place."
    //           }
    //         ]
    //       }
    //     ]
    //   }

    // }
    
    // ).then(res => {
    //   console.log(res.data)
    // })
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