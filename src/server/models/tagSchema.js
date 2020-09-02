const {mongoose} = require('../core/mongodb')

const Schema = mongoose.Schema

const tagSchema = Schema({
  tagName:String,
  tagType:Number //0 skill 1 life ....
})

module.exports = mongoose.model('Tag',tagSchema)
