import React, { useState, useEffect } from 'react';
import axios from 'axios'
import LoaderSpinner from '../LoaderSpinner'

function QuizScore({userScore, scoreRatio}) {
    const [finalAssessment, setAssessment] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:1234/quiz-score/', { finalScore : scoreCalcul() }).then(res => {
            setAssessment(res.data.assessment)
        })
    }, []);

    const scoreCalcul = () => {
        return Math.round((userScore / scoreRatio) * 100)
    }

    const isLoaderSpinnerWrapper = () => {
        return loading() ? 'loader-wrapper' : ''
    }

    const loading = () => {
        return !finalAssessment && !scoreCalcul()
    }

    return (
    <div className={`quiz-score ${isLoaderSpinnerWrapper()}`}>
        { loading()
            ? <LoaderSpinner />
            : <>
                <h1>Quiz fini !</h1>
                <h2>{scoreCalcul()} / 100</h2>
                <p class="assessment">{finalAssessment}</p>
            </>
        }          
    </div>
    );
}

export default QuizScore;