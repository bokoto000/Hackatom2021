import { CardActionArea, CardContent, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import { useEffect, useState } from 'react';

const answers = ["edno", "dve", "tri"];

function MultipleChoice(props) {

    const { question, answerQuestion, id } = props;
    const [disableButtons, setDisableButtons] = useState(false);
    const [answerChosen, setAnswerChosen] = useState();
    console.log(props);
    useEffect(() => {
        setAnswerChosen();
        setDisableButtons(false);
    }, [question.question, id])

    return (
        <Card style={{ width: '700px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', padding: '20px' }}>
            <CardContent>
                <Typography>
                    {question.question.text}
                </Typography>
            </CardContent>
            {answers.map(answer => (
                <Button disabled={disableButtons} variant={answer == answerChosen ? 'contained' : 'primary'} key={answer} onClick={() => {
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