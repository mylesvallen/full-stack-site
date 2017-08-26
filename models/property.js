module.exports = function(sequelize, DataTypes) {

 var property = sequelize.define("property", {
    property_name {
    	type: DataTypes.STRING.
    	allowNull:false,
    },
	tenant_name {
		type:DataTypes.STRING.
	    allowNull:false,

	},
	tenant_rating {
		type:DataTypes.INTEGER.
	},
	tenant_comment{
		type: DataTypes.STRING.
	    allowNull:false,
  });
};
  return property;
};

