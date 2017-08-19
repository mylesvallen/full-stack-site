var Sequelize = require("sequelize");

var sequelize = new Sequelize("propertymgt", "root", "", {
  host: "localhost",
  dialect: "mysql",
  user: "root",
  pool: {
  	max: 5
  	min: 0, 
  	idle: 10000
  }
});

module.exports = sequelize;