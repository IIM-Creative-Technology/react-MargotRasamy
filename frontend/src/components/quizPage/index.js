import React, { Component } from 'react';

class QuizPage extends Component {
    render() {
        const quizParams = this.props.match.params.manga
        const quizName = (quizParams === 'code-geass') ? 'Code Geass' : 'yo'
        
        return (
            <div>
                <h2>{quizName}</h2>
            </div>
        );
    }
}

export default QuizPage;