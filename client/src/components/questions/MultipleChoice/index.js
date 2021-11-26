import { CardActionArea, CardContent, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import { useEffect, useState } from 'react';


function MultipleChoice(props) {

    const { question, answerQuestion, id } = props;
    const answers = question.question.answers;
    const [disableButtons, setDisableButtons] = useState(false);
    const [answerChosen, setAnswerChosen] = useState();

    useEffect(() => {
        setAnswerChosen();
        setDisableButtons(false);
    }, [question.question, id])

    return (
        <Card style={{ width: '700px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', padding: '20px' }}>
            {question.beforeQuestionImage ?
                <img src={question.beforeQuestionImage} style={{marginLeft:"auto",marginRight:"auto",display: "block"}} /> : null
            }
            <CardContent>
                <Typography>
                    {question.question.text}
                </Typography>
            </CardContent>
            {answers.map(answer => (
                <Button style={{textTransform:'none'}} disabled={disableButtons} variant={answer == answerChosen ? 'contained' : 'primary'} key={answer} onClick={() => {
                    answerQuestion(answer);
                    setDisableButtons(true);
                    setAnswerChosen(answer);
                }}>
                    {answer}
                </Button>
            ))}
        </Card>
    )
}

export default MultipleChoice;