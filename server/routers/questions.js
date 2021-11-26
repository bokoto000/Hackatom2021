const express = require("express");
const router = express.Router();
const questions = require('../questions');

const DB = require('diskdb');
const db = DB.connect('./db', ['correctly-answered', 'badly-answered', 'last-answered-question']);

function removeAnswers(questions) {
    return questions.map(({ answer, wrongAnswerExplained, nextQuestionOnCorrectAnswer, nextQuestionOnWrongAnswer,
        ...otherAttributes }) => otherAttributes);
}

function saveAnsweredFunction(user, question, table) {
    if (!db[table].find({ user, question }))
        db[table].save({ user, question });
    db['last-answered-question'].remove({ user });
    db['last-answered-question'].save({ user, question });
}

module.exports = () => {
    router.get("/", async (req, res, next) => {
        console.log('questions');
        const data = removeAnswers(questions);
        res.json({ data });
    });

    router.get("/:id", async (req, res, next) => {
        console.log('questions');
        const question = questions.find(q => q.id === req.params.id);

        return res.json(question);
    });

    router.post("/check-answer", async (req, res, next) => {
        const question = questions.find(q => q.id === req.body.questionId);
        if (question.answer === req.body.user_answer) {
            saveAnsweredFunction(req.body.user, question, 'correctly-answered')
            question.status = 200;
        }
        else {
            saveAnsweredFunction(req.body.user, question, 'badly-answered')
            question.status = 401;
        }
        return res.json(question);
    });

    return router;
};
