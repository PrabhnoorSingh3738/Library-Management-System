const mongoose = require('mongoose')

const bookDetail = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: Number, required: true},
    authorName: {type: String, required: true},
    publisherName: {type: String, required: true},
    price: {type: Number, required: true},
    buy: {type: String, required: true}
})

module.exports = mongoose.model("bookDetail", bookDetail);
