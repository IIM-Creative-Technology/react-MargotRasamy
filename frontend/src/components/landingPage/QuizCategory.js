// import Image from '../../assets/images/backgrounds/attack.png'

function QuizCategory({ quiz }) {
    const backgroundImageImport = (imageToLoad) => {
        return { 
            backgroundImage: `url(${require(`../../assets/images/backgrounds/${imageToLoad}.jpg`).default})`
        }
    } 

    return (
    <a href='/' className="quiz-category"
    style={backgroundImageImport(quiz.image)}>
        <div className="content">
          <h3>{ quiz.title }</h3>   
            <p>{ quiz.caption }</p>  
        </div>
        
        <div className="overlay"></div>
    </a>
    );
}

export default QuizCategory;