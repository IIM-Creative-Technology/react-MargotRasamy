import React, { Component } from 'react';

class QuizPage extends Component {
    render() {
        const quizParams = this.props.match.params.manga
        const quizName = (quizParams === 'code-geass') ? 'Code Geass' : 'yo'

        return (
            <div className="quiz-page">
                <h2>{quizName}</h2>
                <div className="question">Pour quelle raison Eren pleure-t-il au début du manga/animé ?</div>
                <div className="responses-list">
                    <div className="response">Il vient de se battre avec des garçons du même âge</div>
                    <div className="response">Il a fait un cauchemar</div>
                    <div className="response">Mikasa vient de lui mettre une râclée</div>
                    <div className="response">Ses parents viennent de le remettre en place</div>
                </div>
            </div>
        );
    }
}

export default QuizPage;