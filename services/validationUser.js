const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().required().max(120),
  CRM: yup
    .string()
    .matches(/^\d{2}.\d{3}.\d{2}/, 'CRM não está no formato correto!')
    .required(),
  fixFone: yup
    .string()
    .matches(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/, 'Telefone não está no formato correto!')
    .required()
    .max(13),
  fone: yup
    .string()
    .matches(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/, 'Celular não está no formato correto!')
    .required()
    .max(14),
  cep: yup
    .string()
    .matches(/^\d{5}-\d{3}$/, 'CEP não está no formato correto!')
    .required()
    .max(9),
  especialidade: yup.string().required(),
});

const validationUser = async (newUser) => {
  const isValid = await schema.validate(newUser).catch((err) => {
    return { message_error: err.message };
  });
  return isValid;
};

module.exports = validationUser;
