const {DataTypes}=require('sequelize')
module.exports=(connect)=>{
  return  connect.define('Diary', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createTime:{
      type:DataTypes.STRING,
      allowNull:false
    },
    checked:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    tableName: 'diary',
    timestamps: false
    // Other model options go here
  });
}