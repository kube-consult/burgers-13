module.exports = function (sequelize, DataTypes) {
    const Burgers = sequelize.define("Burgers", {
      burger: {
        type: DataTypes.STRING,
        validate: {
          len: [2,140], 
          notEmpty: true
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  
    });
    return Burgers;
  };
  