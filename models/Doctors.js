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
          len: [7, 7],
        },
      },
      fixFone: {
        type: DataTypes.STRING,
        validate: {
          len: [10, 10],
        },
      },
      fone: {
        type: DataTypes.STRING,
        validate: {
          len: [11, 11],
        },
      },
      cep: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 8],
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
            msg: 'Especialidade errada.',
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
            msg: 'Especialidade errada.',
          },
        },
      },
    },
    {
      timestamps: false,
    },
  );

module.exports = Doctors;
