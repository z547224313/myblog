const Tag = require('../models/tagSchema')
const util = require('../utils')
const responseClient = util.responseClient

module.exports.addTag = (req,res)=>{
  const {tagName,tagType} = req.body
  if(tagName){
    Tag.findOne({
      tagName:tagName
    }).then(data=>{
      if(data)
      responseClient(res,200,1,'该标签已存在')

      let tag = new Tag({
        tagName,
        tagType
      })
      tag.save().then(data=>{
        responseClient(res,200,0,'添加标签成功',data)
      })
    }).catch(err=>{
      responseClient(res)

    })
  }else {
    responseClient(res,400,2,'标签名不能为空')
  }
}

module.exports.getTag = (req,res)=>{
  Tag.find().then(data=>{
    if(data)
      responseClient(res,200,0,'查询成功',data)
  }).catch(err=>{
    responseClient(res)

  })
}

module.exports.getTagById = (req, res)=>{
  let {id} = req.query
  Tag.findById(id).then(data=>{
    if(data)
      responseClient(res,200,0,'查询成功',data)
  }).catch(err=>{
    responseClient(res)
  })
}
