const express = require('express');
const { Op } = require('sequelize');
const { Doctors } = require('../models');
const validationUser = require('../services/validationUser');
const registerRoute = express.Router();

registerRoute.post('/', async (req, res) => {
  try {
    const newUser = await validationUser({ ...req.body });
    const userStatus = await Doctors.create({ ...req.body });
    res.status(200).json(userStatus.dataValues);
  } catch (error) {
    error.sql
      ? res.status(401).json({ message: 'CRM já cadastrado' })
      : res.status(401).json({ message: error.message });
  }
});

registerRoute.get('/buscar', async (req, res) => {
  try {
    const { search, type } = req.body;
    const findResults = await Doctors.findAll({
      where: {
        [type]: {
          [Op.substring]: search,
        },
      },
    });
    res.status(200).json(findResults);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

registerRoute.get('/', async (req, res) => {
  try {
    const userStatus = await Doctors.findAll();
    res.status(200).json(userStatus);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

registerRoute.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Doctors.findOne({ where: { id } });
    await Doctors.destroy({ where: { id } });
    res.status(200).json({ message: `${deletedUser.dataValues.name} foi apagado.` });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = registerRoute;
