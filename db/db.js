const Db = require('sequelize');
const connect = new Db('sqlite://./diary.db');

const models = {
  User:require('./user')(connect),
  Diary:require('./diary')(connect),
}

module.exports={
  connect,
  models
}

// connect.authenticate().then(()=>{
//   console.log('Connection has been established successfully.');
// }).catch (error=>{
//   console.error('Unable to connect to the database:', error);
// })
