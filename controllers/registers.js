const express = require('express');
const validationUser = require('../services/validationUser');
const registerRoute = express.Router();

registerRoute.get('/', async (req, res) => {
  try {
    const newUser = await validationUser({ ...req.body });
    res.status(200).json({ message: 'oi' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = registerRoute;
