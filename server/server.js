const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//require('./config/config')(app);
const port = process.env.port || 5000;


app.use("/questions", require("./routers/questions")());


app.listen(port, () => console.log(`Listening on port ${port}`));

