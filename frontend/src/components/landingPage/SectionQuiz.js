import QuizCategory from './QuizCategory'
function SectionQuiz() {
    const quizDatas = [
      {
        title: 'L\'attaque des titans',
        caption: 'Incollable sur Shingeki no Kyojin ? Tente ta chance !',
        image: 'shin'
      },
      {
        title: 'Fruits basket',
        caption: 'Fan des shojo classiques ? Tente ta chance !',
        image: 'fruits-basket'
      },
      {
        title: 'Code geass',
        caption: 'Prêt à défier les britanniens ? Yes, my lord !',
        image: 'code-geass'
      },
      {
        title: 'Death note',
        caption: 'Réponds aux questions ou ton nom risque d\'y être inscrit !',
        image: 'death-note'
      },
      
    ]

    return (
      <div className="section-quiz">
        { quizDatas &&
            quizDatas.map((quizData, index) => { return <QuizCategory key={index} quiz={quizData} /> })
        }
      </div>
    );
  }
  
  export default SectionQuiz;