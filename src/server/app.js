const express = require('express')

const mongoose = require('./core/mongodb')

const router = require('./router/index')

const path = require('path')

const bodyParser = require('body-parser')

const app = express()

const util = require('./utils')

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/public/',express.static(path.join(__dirname,'./public/')))

mongoose.connect()

app.use(router)

app.listen('3000',()=>{
  console.log('3000端口服务启动');
})
