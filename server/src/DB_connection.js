require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD} = process.env;

const UserModel = require('./models/User');

const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${BDD}`,{ logging: false, native:false}
);


 //Ejecutar la función de los modelos.
UserModel(sequelize);


//Relacionar modelos 
const {User} = sequelize.models;


module.exports = {
   User,
   conn: sequelize
};
