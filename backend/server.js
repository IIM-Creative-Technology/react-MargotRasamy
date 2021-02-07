const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// File reader
const fs = require("fs");
app.use(express.json());



// Server running on port 1234
const PORT = 1234;

// Method to read files with options : utf-8 or other encoding
const readFile = (fileName, option) => {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, option, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });

    });
};

// Method to write file with data that needs to be stringified with JSON.stringify()
const writeFile = (fileName, data) => {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });

    });
};

const quizListFile = "./datas/quizList.json"
const quizDatasFile = "./datas/quizDatas.json"
const quizScoreRate = "./datas/quizScoreRate.json"

// GET the quiz list endpoint
app.get('/quiz-list', function (req, res) {
    readFile(quizListFile, "utf8").then((data) => {
        res.send(JSON.parse(data))
    }).catch((err) => {
        console.log(err)
        res.send('Error', err)
    })   
})

// GET the quiz details endpoint 
app.get('/quiz-details/:label', function (req, res) {    
    readFile(quizDatasFile, "utf8").then((data) => {
        const quizDatas = JSON.parse(data)
        const quiz = quizDatas.find((quizData) => 
            quizData.quizLabel === req.params.label
        )
        res.send(quiz)
    }).catch((err) => {
        console.log(err)
        res.send('Error', err)
    }) 
})

// POST the quiz score to get assessment rate endpoint 
app.post('/quiz-score', function (req, res) {    
    readFile(quizScoreRate, "utf8").then((data) => {
        const quizScores = JSON.parse(data)
        const quizAssessementData = quizScores.find((quizScore) => 
            quizScore.scoreMin <= req.body.finalScore && quizScore.scoreMax >= req.body.finalScore
        )
        res.send(quizAssessementData)
    }).catch((err) => {
        console.log(err)
        res.send('Error', err)
    }) 
})

// POST create a quiz
app.post('/quiz/create', async function (req, res) { 
    const newQuizCategory = req.body.quizCategory
    const newQuizDetails = req.body.quizDetails
    readFile(quizListFile, "utf8").then((data) => {
        const oldQuizList = JSON.parse(data)
        const newQuizList = [...oldQuizList, newQuizCategory]
        writeFile(quizListFile, JSON.stringify(newQuizList))
    }).catch((err) => {
        console.log(err)
        res.send('Error', err)
        return
    }) 
})



// App listening on port chosen
app.listen(PORT, function () {
    console.log(`App listening on port ${ PORT }`)
})