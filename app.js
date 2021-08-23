var express = require('express');
var path = require('path');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var diaryRouter =require('./routes/diary');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: false,limit: '50mb'}));
app.use(express.static(path.join(__dirname, "public")));

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
  // //允许的header类型
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  // //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 可以带cookies
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/diary', diaryRouter);

//导入数据库模型
const {models} =require('./db/db')
models.User.sync({force:false})
models.Diary.sync({force:false})

app.listen(4000,()=>{
  console.log('服务已启动');
})
module.exports = app;
