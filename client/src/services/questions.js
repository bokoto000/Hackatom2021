import superagent from 'superagent';

class QuestionsService {
    async loadAllQuestions() {
        const questions = await superagent.get(`http://localhost:5000/questions`);
        return questions;
    }

    async loadQuestion(id) {
        const question = await superagent.get(`http://localhost:5000/questions/${id}`);
        return question.body;
    }

    async checkQuestionAnswer(id, answer) {
        const res = await superagent.post(`http://localhost:5000/questions/check-answer`).send({ questionId: id, user_answer: answer });
        return res.body;
    }
}

const questionService = new QuestionsService();

export default questionService;