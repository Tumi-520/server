const express = require('express');
const router = express.Router();
const {models,connect} = require('../db/db')

/* GET users listing. */
router.post('/register', async(req, res, next)=> {
  const {username,password} =req.body
  let result =await models.User.findAll({
    where:{
      username
    }
  })
  console.log(result);
  if (result.length) {
    res.send({
      status:203,
      msg:"用户已存在"
    })
  }else {
    const time =Date.now()
     models.User.create({username,password,createTime:time})
    res.send({
      status:200,
      msg:"注册成功"
    })
  }
});

router.post('/login',async (req, res, next)=> {
  const {username,password} =req.body
  let result =await models.User.findAll({
    where:{
      username
    }
  })
  console.log(result);
  if(result.length ){
    if(result[0].dataValues.password===password){
      res.send({
        status:200,
        msg:'登录成功'
      })
    }else{
      res.send({
        status:203,
        msg:'密码错误'
      })
    }
  }else{
    res.send({
      status:202,
      msg:'用户名不存在'
    })
  } 
});

module.exports = router;
