const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().required().max(120),
  CRM: yup
    .string()
    .matches(/^\d{2}.\d{3}.\d{2}/)
    .required(),
  fixFone: yup
    .string()
    .matches(/^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/)
    .required()
    .max(14),
  fone: yup
    .string()
    .matches(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/)
    .required()
    .max(15),
  cep: yup
    .string()
    .matches(/^\d{5}-\d{3}$/)
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
