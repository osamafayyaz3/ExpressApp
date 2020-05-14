const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Ff@y0807', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
