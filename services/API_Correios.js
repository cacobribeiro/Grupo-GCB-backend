const fetch = require('node-fetch');

const findCep = async (cep) => {
  console.log(cep);
  const URL = `https://viacep.com.br/ws/${cep}/json/`;
  return fetch(URL).then((data) => data.json());
};

module.exports = findCep;
