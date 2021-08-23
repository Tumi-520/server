const express = require('express');
const router = express.Router();
const {models,connect} = require('../db/db')

/* GET home page. */
router.get('/', async(req, res, next) =>{
  const {username} =req.query
  let result =await models.Menu.findAll({
    where:{
      username
    }
  })
  console.log(result);
});

module.exports = router;
