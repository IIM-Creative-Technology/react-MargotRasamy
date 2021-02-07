import { NavLink } from 'react-router-dom'

function QuizCategory({ quiz }) {
    const backgroundImageImport = (imageToLoad) => {
        return { 
            backgroundImage: `url(${require(`../../assets/images/backgrounds/${imageToLoad}`).default})`
        }
    } 

    return (
    <NavLink exact to={`quiz/${quiz.path}`} className="quiz-category"
    style={backgroundImageImport(quiz.image)}>
        <div className="content">
            <h3>{ quiz.quizName }</h3>   
            <p>{ quiz.caption }</p>
        </div>
        
        <div className="overlay"></div>
    </NavLink>    
    );
}

export default QuizCategory;