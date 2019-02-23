const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres', 'postgres', 'abcd@1234', {
//   host: 'localhost',
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

// });

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://postgres:abcd@1234@localhost:5432/postgres');

module.exports = sequelize