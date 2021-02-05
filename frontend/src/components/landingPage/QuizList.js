import QuizCategory from './QuizCategory'
function QuizList() {
    const quizDatas = [
      {
        title: 'L\'attaque des titans',
        caption: 'Incollable sur Shingeki no Kyojin ? Tente ta chance !',
        image: 'shin',
        path: 'shingeki-no-kyojin'
      },
      {
        title: 'Fruits basket',
        caption: 'Fan des shojo classiques ? Tente ta chance !',
        image: 'fruits-basket',
        path: 'fruits-basket'
      },
      {
        title: 'Code geass',
        caption: 'Prêt à défier les britanniens ? Yes, my lord !',
        image: 'code-geass',
        path: 'code-geass'
      },
      {
        title: 'Death note',
        caption: 'Réponds aux questions ou ton nom risque d\'y être inscrit !',
        image: 'death-note',
        path: 'death-note'
      },
      
    ]

    return (
      <div className="quiz-list">
        { quizDatas &&
            quizDatas.map((quizData, index) => { return <QuizCategory key={index} quiz={quizData} /> })
        }
      </div>
    );
  }
  
  export default QuizList;