const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://devuser:LMmGCy3ULVDogMfg@project2db.pvz6f.mongodb.net/project2db?retryWrites=true&w=majority');

module.exports.User = require('./user')
module.exports.Poll = require('./poll')