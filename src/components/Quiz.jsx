import { useState, useCallback } from "react";
import QUESTIONS from '../questions'
import Summary from "./Summary";
import Question from "./Question";
export default function Quiz(){
    
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length
    
    const quiziIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }, [])

    const handleSkipAnswer = useCallback( () => handleSelectAnswer(null), [handleSelectAnswer])

    if (quiziIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return (
        <div id="quiz">
            <Question key={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} index={activeQuestionIndex}/>
        </div>
    )
}