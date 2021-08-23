const {DataTypes}=require('sequelize')
module.exports=(connect)=>{
  return  connect.define('User', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createTime:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    tableName: 'user',
    timestamps: false
    // Other model options go here
  });
}