const questions = [
    {
        id: '1',
        type: "choose_1",
        question: {
            text: "What is edishtosi",
            answers: ['edno', 'dV33333333333333333333333333333222222222e', 'tri32222222222222333333333333333333333333']
        },
        answer: 'edno',
        nextQuestionOnCorrectAnswer: "2",
        nextQuestionOnWrongAnswer: "3",
        wrongAnswerExplained: "Nomer 1",
        beforeQuestionImage: "https://i.ibb.co/RQswJJj/Picture1.png",
        afterQuestionImage: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/11/14/15737172127732.jpg"
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