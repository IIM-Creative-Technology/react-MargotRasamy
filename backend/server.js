const express = require('express');
const app = express();

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

// const quizList = async function promiseReadFile(){
//     try{ 
//         const data = await readFile(quizListFile, "utf8");
//         return JSON.parse(data);
//     }
//     catch (err){
//         return
//         console.error('Error while reading file', err);
//         process.exit(1);
//     }  
// }

var quizList
readFile(quizListFile, "utf8").then((data) => {
    quizList = JSON.parse(data);
}).catch((err) => {
    console.log(err)
})

// App listening on port chosen
app.listen(PORT, function () {
    console.log(`App listening on port ${ PORT }`)
})