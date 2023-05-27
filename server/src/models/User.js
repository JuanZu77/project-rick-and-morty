const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

   sequelize.define('User', {
  
   email:{
              type: DataTypes.STRING,
              alowNull: false,
              isEmail: true,
     },

    password:{
                      type: DataTypes.STRING,
                       alowNull: false,
     },

   }, { timestamps: false });
};
