import superagent from 'superagent';

class QuestionsService {
    async loadAllQuestions() {    console.log('app', process.env.REACT_APP_SERVER_BASE_URL);
        const questions = await superagent.get(`${process.env.REACT_APP_SERVER_BASE_URL}/questions`);
        return questions;
    }

    async loadQuestion(id) {
        const question = await superagent.get(`${process.env.REACT_APP_SERVER_BASE_URL}/questions/${id}`);
        return question.body;
    }

    async checkQuestionAnswer(id, answer) {
        const res = await superagent.post(`${process.env.REACT_APP_SERVER_BASE_URL}/questions/check-answer`).send({ questionId: id, user_answer: answer });
        return res.body;
    }
}

const questionService = new QuestionsService();

export default questionService;