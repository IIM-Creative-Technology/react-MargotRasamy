const express = require('express');
const app = express();

const PORT = 1234;

app.get('/', function (req, res) {
    res.send('Backend started')
})

app.listen(PORT, function () {
    console.log(`App listening on port ${ PORT }`)
})