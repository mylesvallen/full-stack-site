var Sequelize = require('sequelize');

var connection = new Sequelize('propertymgt', 'root', '');

var Article = connection.define('article', {
    //properties goes here
    //title: Sequelize.STRING, 
    //body: Sequelize.TEXT
});

module.exports = sequelize;