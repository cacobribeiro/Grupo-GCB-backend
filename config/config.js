require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'group-gbc',
    host: process.env.DATABASE_URL,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'group-gbc',
    host: process.env.DATABASE_URL,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'group-gbc',
    host: process.env.DATABASE_URL,
    dialect: 'mysql',
  },
};
