import { Card, CardContent, Typography } from '@mui/material';
import './index.css';

export default function AboutUs() {
    return (
        <div className='contacts'>
            <h1 style={{ padding: '30px', marginLeft: 'auto', marginRight: 'auto', width: '150px' }}>About us</h1>
            <Card style={{ width: "800px", marginLeft: 'auto', marginRight: 'auto' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        The members of our team are: Vladislav Shabanski, Boris Velkovski, Nikol Rangelova, Viktoriq Pepelqrska and Hristo Vasilev.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Our team is behind this quiz for Hackatom. We are driven by the idea to share knowledge to
                        everyone who either knows a thing or two about Nuclear Power or doesn't know anything at all!
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        We hope you enjoy our small quiz.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}