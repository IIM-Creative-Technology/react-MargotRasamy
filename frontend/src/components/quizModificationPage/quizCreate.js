import { useEffect } from 'react';
import axios from 'axios'

// Next step : component with form or json upload to create new quiz
// Component not implemented yet but API endpoint working
// Unused component but will implement it later for next version
function QuizCreate() {

  useEffect(() => {
    // POST method to create new quiz creation : new form and page to implement
    axios.post('https://otakuiz.herokuapp.com/quiz/create',
    {
      quizCategory : {
        "quizName": "Fullmetal alchemist",
        "quizLabel": "code-geass",
        "caption": "Prêt à défier les britanniens ? Yes, my lord !",
        "image": "code-geass",
        "path": "fullmetal"
      },
      quizDetails: {
        "quizName": "Fullmetal alchemist",
        "quizLabel": "fullmetal",
        "quizDetails": [
          {
            "question": "Pour quelle raison Eren pleure-t-il au début du manga/animé ?",
            "answer": "B",
            "responses": [
              {
                "label": "A",
                "response": "Il vient de se battre avec des garçons du même âge."
              },
              {
                "label": "B",
                "response": "Il a fait un cauchemar."
              },
              {
                "label": "C",
                "response": "Mikasa vient de lui mettre une râclée."
              },
              {
                "label": "D",
                "response": "Ses parents viennent de le remettre en place."
              }
            ]
          }
        ]
      }
    }
    ).then(res => {
      console.log(res.data)
    })
  }, []);

  return (
    <div id="quiz-create">
      
    </div>
  );
}
  
export default QuizCreate;