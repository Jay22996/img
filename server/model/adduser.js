var mongoose = require('mongoose')

var img_schema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('imgdemo',img_schema)