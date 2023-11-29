const mongoose = require('mongoose')
const user = require('../model/bookModel')

exports.findByCode = async(code)=>{
    return await user.findOne({'code':code}).select('_id')
}

exports.addBook = async(data)=>{
    return await user.create(data)
}