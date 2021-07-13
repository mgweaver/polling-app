const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

mongoose.set('debug', true)
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI);

module.exports.User = require('./user')
module.exports.Poll = require('./poll')