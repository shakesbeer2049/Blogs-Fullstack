const mongoose  = require('mongoose')

const mongoUrl = process.env.mongoUrl
console.log(`connecting to ${mongoUrl}`)


mongoose.connect(mongoUrl).then(result => console.log('connected to mongoDB')).catch(error => console.log(error.message)
)

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

  module.exports = mongoose.model('Blog', blogSchema)

 