require('dotenv').config();
const cors = require('cors');

const bodyParser = require('body-parser');
const express = require('express');

const controller = require('./controllers');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.use('/', controller.register);

app.listen(PORT, () => console.log(`Listening PORT: ${PORT}`));
