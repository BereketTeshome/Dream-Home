const mongoose = require('mongoose').connect

const connectDB = (url) => {
  return mongoose(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB
