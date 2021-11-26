import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import MultipleChoice from "../questions/MultipleChoice";

import questionsService from "../../services/questions";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import Alert from '@mui/material/Alert';


function Quiz() {


    const { width, height } = useWindowSize();


    const [nextQuestionButtonVisible, setnextQuestionButtonVisible] = useState(0);
    const [nextQuestion, setnextQuestion] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentQuestionId, setCurrentQuestionId] = useState();
    const [answer, setAnswer] = useState();
    const [confetti, setConfetti] = useState(false);
    const [wrongAnswerExplanationVisible, setWrongAnswerExplanationVisible] = useState(false);
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        setCurrentQuestionId("1");
    }, []);

    useEffect(() => {
        async function loadQuestion() {
            /* disable-next-line react-hooks/rules-of-hooks */
            const data = await questionsService.loadQuestion(currentQuestionId);
            setCurrentQuestion(data);
        };
        loadQuestion();
    }, [currentQuestionId]);

    async function answerQuestion(answer) {
        const res = await questionsService.checkQuestionAnswer(currentQuestionId, answer);

        if (res.status == 200) {
            setConfetti(true);
            setCorrect(true);
            setTimeout(function () {
                setConfetti(false);
                setnextQuestion(res.nextQuestionOnCorrectAnswer);
                setnextQuestionButtonVisible(true);
            }, 5000);
        }
        else {
            setnextQuestion(res.nextQuestionOnWrongAnswer);
            setnextQuestionButtonVisible(true);
            setWrongAnswerExplanationVisible(true);
        }
    }

    function loadNextQuestion() {
        setCurrentQuestionId(nextQuestion);
        setnextQuestionButtonVisible(false);
        setWrongAnswerExplanationVisible(false);
        setCorrect(false);
    }

    return (
        <div style={{ alignItems: 'center' }}>
            {confetti ?
                <Confetti
                    width={width}
                    height={height - 50}
                    style={{ position: 'absolute', top: '0', left: '0' }}
                /> :
                null}
            {currentQuestion && currentQuestion.type == 'choose_1' ?
                <MultipleChoice question={currentQuestion} answerQuestion={answerQuestion} id={currentQuestionId} /> :
                null
            }
            {
                wrongAnswerExplanationVisible ?
                    <Alert style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} severity="error">
                        {currentQuestion.wrongAnswerExplained}</Alert> :
                    null
            }
            {
                correct ?
                    <Alert style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} severity="success">
                        {currentQuestion.wrongAnswerExplained}</Alert> :
                    null
            }
            {currentQuestion && nextQuestionButtonVisible && currentQuestion.afterQuestionImage ?
                <img src={currentQuestion.afterQuestionImage} style={{ marginLeft: 'auto', marginRight: 'auto', display: "block", marginTop: '30px' }} /> : null
            }
            <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '200px', marginTop: '10px' }}>
                {nextQuestionButtonVisible ?
                    <Button
                        variant="contained" onClick={() => loadNextQuestion()} >
                        Next Question
                    </Button>
                    : null}
            </div>
        </div>
    )
}

export default Quiz;