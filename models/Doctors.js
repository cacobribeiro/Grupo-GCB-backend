const Doctors = (sequelize, DataTypes) =>
  sequelize.define(
    'Doctors',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 120],
        },
      },
      CRM: {
        type: DataTypes.STRING,
        validate: {
          len: [9, 9],
        },
      },
      fixFone: {
        type: DataTypes.STRING,
        validate: {
          len: [13, 13],
        },
      },
      fone: {
        type: DataTypes.STRING,
        validate: {
          len: [14, 14],
        },
      },
      cep: {
        type: DataTypes.STRING,
        validate: {
          len: [9, 9],
        },
      },
      andress: {
        type: DataTypes.STRING,
      },
      especialidade: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [
              [
                'ALERGOLOGIA',
                'ANGIOLOGIA',
                'BUCO MAXILO',
                'CARDIOLOGIA CLÍNICA',
                'CARDIOLOGIA INFANTIL',
                'CIRURGIA CABEÇA E PESCOÇO',
                'CIRURGIA CARDÍACA',
                'CIRURGIA DE TÓRAX',
              ],
            ],
            msg: 'Especialidade desconhecida.',
          },
        },
      },
      especialidade2: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [
              [
                'ALERGOLOGIA',
                'ANGIOLOGIA',
                'BUCO MAXILO',
                'CARDIOLOGIA CLÍNICA',
                'CARDIOLOGIA INFANTIL',
                'CIRURGIA CABEÇA E PESCOÇO',
                'CIRURGIA CARDÍACA',
                'CIRURGIA DE TÓRAX',
              ],
            ],
            msg: 'Especialidade desconhecida.',
          },
        },
      },
    },
    {
      timestamps: false,
    },
  );

module.exports = Doctors;
