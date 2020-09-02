const mongoose = require('mongoose')

const config = require('../app.config')

module.exports.mongoose = mongoose

module.exports.connect = ()=>{
  mongoose.connect(config.MONGODB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
