const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().required().max(120),
  CRM: yup.string().required().max(7),
  fixFone: yup.string().required().max(10),
  fone: yup.string().required().max(11),
  cep: yup.string().required().max(8),
  especialidade: yup.string().required(),
});

const validationUser = async (newUser) => {
  const isValid = await schema.validate(newUser).catch((err) => {
    return { message_error: err.message };
  });
  return isValid;
};

module.exports = validationUser;
