const express = require('express');
const router = express.Router();
const {models,connect} = require('../db/db')


router.get('/list',async(req,res,next)=>{
  let {username}=req.query
  let result =await models.Diary.findAll({
    where:{
      username
    }
  })
  res.send({
    status:200,
    result
  })
})

router.get('/add',async(req,res)=>{
  let {id,text,checked,createTime,username}=req.query
  let result =await models.Diary.create({id,text,checked,createTime,username})
  console.log(result);
  if(Object.keys(result).length>0){
    res.send({
      status:200,
      msg:'添加成功'
    })
  }
})

router.get('/edit',async(req,res)=>{
  let {id,text,checked}=req.query
  let result =await models.Diary.update({text,checked},{
    where:{
      id
    }
  })
  if(result[0]===1){
    res.send({
      status:200,
      msg:"编辑成功"
    })
  }
})

router.get('/del',async(req,res)=>{
  let {id} =req.query
  let result =await models.Diary.destroy({
    where:{
      id
    }
  })
  if(result===1){
    res.send({
      status:200,
      msg:'删除成功'
    })
  }
})

module.exports = router;
