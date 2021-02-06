import React, { Component } from 'react';
import axios from 'axios';

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizDetails: [
                {
                    question: 'Pour quelle raison Eren pleure-t-il au début du manga/animé ?',
                    answer: 'B',
                    responses: [
                        {
                            label: 'A',
                            response: 'Il vient de se battre avec des garçons du même âge.'
                        },
                        {
                            label: 'B',
                            response: 'Il a fait un cauchemar.'
                        },
                        {
                            label: 'C',
                            response: 'Mikasa vient de lui mettre une râclée.'
                        },
                        {
                            label: 'D',
                            response: 'Ses parents viennent de le remettre en place.'
                        }
                    ]
                }
            ]
        };
    }
    render() {
        const quizParams = this.props.match.params.manga
        const quizName = (quizParams === 'code-geass') ? 'Code Geass' : 'yo'

        // const handleChange = () => {
        //     this.setState({question: 'Hello'});
        // }
        
        const handleSubmit = (e) => {
            e.preventDefault()
            axios.get('http://localhost:1234/hello').then(res => console.log(res.data));
            const newQuizDetails = this.state.quizDetails
            newQuizDetails[0].question = "hello working"
            this.setState({quizDetails : newQuizDetails});
        }

        return (
            <div className="quiz-page">
                <h2>{quizName}</h2>
                <div className="question">{this.state.quizDetails[0].question}</div>
                <form onSubmit={(e) => handleSubmit(e)} className="responses-list">
                    <button type="submit" className="response">Il vient de se battre avec des garçons du même âge.</button>
                    <button type="submit" className="response">Il a fait un cauchemar</button>
                    <button type="submit" className="response">Mikasa vient de lui mettre une râclée</button>
                    <button type="submit" className="response">Ses parents viennent de le remettre en place</button>
                </form>
            </div>
        );
    }
}

export default QuizPage;