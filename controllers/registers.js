const express = require('express');
const { Op } = require('sequelize');
const { Doctors } = require('../models');
const validationUser = require('../services/validationUser');
const findCep = require('../services/API_Correios');
const concaAndress = require('../services/concaAndress');
const registerRoute = express.Router();

// ROTA PARA CADASTRAR UM MEDICO ( INSERT )
registerRoute.post('/', async (req, res) => {
  try {
    const newUser = await validationUser({ ...req.body });
    if (newUser.message_error) return res.status(400).json({ message: newUser.message_error });
    const andress = await findCep(newUser.cep);
    const newAndress = await concaAndress(andress, req.body.numero);
    const userStatus = await Doctors.create({ ...req.body, andress: newAndress });
    res.status(201).json(userStatus.dataValues);
  } catch (error) {
    error.sql
      ? res.status(400).json({ message: 'CRM já cadastrado' })
      : res.status(400).json({ message: error.message });
  }
});

// ROTA PARA BUSCAR UM MEDICO POR CATEGORIA ( SELECT )
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

// ROTA PARA EDITAR UM MEDICO ( UPDATE )
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
      : res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// ROTA PARA TRAZER TODOS OS MEDICOS CADASTRADOS NO SISTEMA ( SELECT )
registerRoute.get('/', async (req, res) => {
  try {
    const userStatus = await Doctors.findAll();
    res.status(200).json(userStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ROTA PARA DELETAR UM MEDICO DO SISTEMA ( DELETE )
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
