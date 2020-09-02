const Article = require('../models/articleSchema')
const util = require('../utils')
const formidable = require('formidable');
const utils = require('../utils')
const path = require('path')
const fs = require('fs')
const responseClient = util.responseClient

const dateFormat = utils.dateFormat

module.exports.addArticle = function (req,res) {
  let {articleName,content,coverImg,tags,createTime} = req.body
  let article = new Article({
    articleName,
    content,
    coverImg,
    tags,
    createTime
  })
  article.save().then(data=>{
    responseClient(res,200,0,'添加成功',data)
  }).catch(err=>{
    console.log(err)
    responseClient(res)

  })
}
module.exports.addCover = function (req, res) {
  let form = new formidable.IncomingForm();
  form.encoding = 'utf-8'; // 编码
  // 保留扩展名
  form.keepExtensions = true;
  //文件存储路径 最后要注意加 '/' 否则会被存在public下
  form.uploadDir = path.join(__dirname, '../public/cover/');
  form.parse(req, (err, fields ,files) => {
    let time = dateFormat(new Date(), 'yyyy-MM-dd-mm-ss');
    let extName = path.extname(files.file.path);
    let newName = time + '_' + Math.floor(Math.random()*9999) + extName;
    let oldPath = files.file.path;
    let newPath = path.join(__dirname,'../public/cover/', newName);
    fs.renameSync(oldPath,newPath);
    res.send('http://localhost:3000/public/cover/'+newName)
  })
}
module.exports.addMarkImg = function (req, res) {
  let form = new formidable.IncomingForm();
  form.encoding = 'utf-8'; // 编码
  form.keepExtensions = true;
  form.uploadDir = path.join(__dirname, '../public/img/');
  form.parse(req, function(err, fields, files) {

    let filename = path.parse(files.image.path).base
    res.send('http://localhost:3000/public/img/'+filename)
  });
}
module.exports.getAllArticle = function (req, res) {
  Article.find().then(data=>{
    if(data)
      responseClient(res, 200, 0, '查询成功', data)
  }).catch(err=>{
    responseClient(res)
  })
}
module.exports.getArticleById = function (req, res) {
  let {id} = req.query
  Article.findById(id).then(data=>{
    if(data)
      responseClient(res, 200, 0, '查询成功', data)
  }).catch(err=>{
    responseClient(res)
  })
}
module.exports.updateViews = function (req, res) {
  let {id} = req.body
  let field ={}
  Article.findById(id).then(data=>{
    if(data){
      data.meta.views = data.meta.views + 1;
      field.meta = data.meta
      Article.updateOne({_id:id},field).then(ret=>{
        responseClient(res, 200, 0, '更新成功', ret)
      }).catch(
          err=>{
            responseClient(err)
          }
      )
    }
  }).catch(err=>{
    responseClient(res)
  })

}

module.exports.updateLikes = function(req, res){
  let {id} = req.body
  let field ={}
  Article.findById(id).then(data=>{
    if(data){
      data.meta.likes = data.meta.likes+1
      field.meta = data.meta
      Article.updateOne({_id:id},field).then(ret=>{
        responseClient(res, 200,0,'更新成功',ret)
      }).catch(
          err=>{
            responseClient(err)
          }
      )
    }
  }).catch(err=>{
    responseClient(res)
  })
}
module.exports.getArticleByPage = function (req, res) {
  let {page} = req.query
  page = page-1
  //每页展示9个数据
  Article.find().skip(page*9).limit(9).then(data=>{
    //删除关于页面的文章
    let aboutIndex = 0
    data.find((val,index,arr)=>{
      if(val.tags.length ===0){
        aboutIndex = index
      }
    })
    data.splice(aboutIndex,1)
    //删除结束
    if(data)
      responseClient(res, 200, 0, '查询成功', data)
  }).catch(err=>{
    responseClient(res)
  })
}

module.exports.getAllArticleNumber = function (req, res) {
  Article.find().then(data=>{
    if(data){
      let length = data.length
      responseClient(res,200,0,'查询成功',length)
    }

  }).catch(err=>{
    responseClient(res)
  })

}

module.exports.getArticleByTag = function (req, res){
  let {page,tagId} = req.query
  page = page-1
  Article.find({tags:tagId}).skip(page*9).limit(9).then(data=>{
    if(data)
      responseClient(res, 200, 0, '查询成功', data)
  }).catch(err=>{
    responseClient(res)})
}

module.exports.getAllArticleByTag = function (req, res) {
  let {tagId} = req.query
  Article.find({tags:tagId}).then(data=>{
    if(data)
      responseClient(res, 200, 0, '查询成功', data)
  }).catch(err=>{
    responseClient(res)})
}
