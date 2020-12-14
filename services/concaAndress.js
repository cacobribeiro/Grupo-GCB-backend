const concaAndress = (andress, numero) =>
  `${andress.logradouro} ${numero}, ${andress.bairro} - ${andress.localidade}, ${andress.uf}`;

module.exports = concaAndress;
