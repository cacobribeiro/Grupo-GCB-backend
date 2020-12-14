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

// postgres://
// swrkbwhcootjql
// :8d099ab3b1338139959ad3d9050dd55a9cfe525dee1089a56321564e53a2ea3e
// @
// ec2-3-220-98-137.compute-1.amazonaws.com:5432/
// df63rp7us7rpfo
