const express = require('express');
const fs= require('fs')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 80;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});





