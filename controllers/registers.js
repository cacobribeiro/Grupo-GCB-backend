const express = require('express');
const { Op } = require('sequelize');
const { Doctors } = require('../models');
const validationUser = require('../services/validationUser');
const registerRoute = express.Router();

// ROTA PARA CADASTRAR UM MEDICO
registerRoute.post('/', async (req, res) => {
  try {
    const newUser = await validationUser({ ...req.body });
    const userStatus = await Doctors.create({ ...req.body });
    res.status(201).json(userStatus.dataValues);
  } catch (error) {
    error.sql
      ? res.status(400).json({ message: 'CRM já cadastrado' })
      : res.status(400).json({ message: error.message });
  }
});

// ROTA PARA BUSCAR UM MEDICO POR CATEGORIA
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
    res.status(400).json({ message: error.message });
  }
});

// ROTA PARA EDITAR UM MEDICO
registerRoute.put('/editar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await validationUser({ ...req.body });
    await Doctors.update({ ...req.body }, { where: { id } });
    const userStatus = await Doctors.findOne({ where: { id } });
    res.status(200).json(userStatus.dataValues);
  } catch (error) {
    error.sql
      ? res.status(400).json({ message: 'CRM já cadastrado' })
      : res.status(400).json({ message: error.message });
  }
});

// ROTA PARA TRAZER TODOS OS MEDICOS CADASTRADOS NO SISTEMA
registerRoute.get('/', async (req, res) => {
  try {
    const userStatus = await Doctors.findAll();
    res.status(200).json(userStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ROTA PARA DELETAR UM MEDICO DO SISTEMA
registerRoute.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Doctors.findOne({ where: { id } });
    await Doctors.destroy({ where: { id } });
    res.status(204).json({ message: `${deletedUser.dataValues.name} foi apagado.` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = registerRoute;
