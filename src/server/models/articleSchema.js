const {mongoose} = require('../core/mongodb')

const Schema = mongoose.Schema

const articleSchema = new Schema({
  articleName:{
    //文章标题
    type:String,
    required:true
  },
  content:String,//文字内容HTML格式
  createTime:{
    //创建时间
    type:Date,
    default:Date.now()
  },
  coverImg:{//封面图片
    type:String
  },
  tags:[{//技术标签
    type:mongoose.Schema.Types.ObjectId,
    ref:'tagSchema'
  }],
  meta: {//元数据
    views:{type:Number, default:0},
    likes:{type:Number, default:0}
  }
})
module.exports = mongoose.model('Article',articleSchema)
