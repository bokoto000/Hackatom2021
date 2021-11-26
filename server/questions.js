const questions = [
    {
        id: '1',
        type: "choose_1",
        question: {
            text: "What is edishtosi",
            answers: ['edno', 'dve', 'tri']
        },
        answer: 'edno',
        nextQuestionOnCorrectAnswer: "2",
        nextQuestionOnWrongAnswer: "3",
        wrongAnswerExplained: "Nomer 1",
    },
    {
        id: '2',
        type: "choose_1",
        question: {
            text: "What is dve",
            answers: ['edno', 'dve', 'tri']
        },
        answer: 'dve',
        nextQuestionOnCorrectAnswer: "final",
        nextQuestionOnWrongAnswer: "final",
        wrongAnswerExplained: "Nomer 2",
    },
    {
        id: '3',
        type: "choose_1",
        question: {
            text: "What is tri",
            answers: ['edno', 'dve', 'tri']
        },
        answer: 'tri',
        nextQuestionOnCorrectAnswer: "final",
        nextQuestionOnWrongAnswer: "final",
        wrongAnswerExplained: "Nomer 3",
    }
]

module.exports = questions;