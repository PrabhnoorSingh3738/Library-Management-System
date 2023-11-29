const express = require('express')
const bookmodel = require('../model/bookModel')
const bookService = require('../services/bookServices')


//get books
exports.getBooks = async(req,res)=>{
    let books;
    try{
        books =await bookmodel.find();
        res.status(200).json({books});
    }catch(err){
        console.log(err)
    }
}

//add
exports.addbook = async (req,res)=>{
    try{
        const inputData = req.body;
        const code = inputData.code;
        const book = await bookService.findByCode(code);
        if(book){
            res.status(500).json({message:"book already existed"})
        }else{
            const createBook= await bookService.addBook(inputData);
            res.status(200).json({message: 'Book added Successfully', data: createBook})
        }  
    }catch(err){
        res.status(500).json({status: 500,message: err.stack})
    }
}

//update
exports.updateBook = async(req,res)=>{
    try{
        const bookCode = req.params.id;
        const upName = req.body.name;
        const upCode = req.body.code;
        const upAuthor = req.body.authorName;
        const upPublisher = req.body.publisherName;
        const upPrice = req.body.price;
        const upBuy = req.body.buy;
        // const bookID = await bookService.findByCode(bookCode);

        // console.log(bookID.id)
        if(bookCode){
            const dataa = await bookmodel.findByIdAndUpdate({_id:bookCode},{name:upName ,code:upCode, authorName:upAuthor, publisherName:upPublisher,price:upPrice,buy:upBuy})
            res.status(200).json({massage:"Book Updated Successfully"})
        }else{
            res.status(500).json({message:"book does not exist"})
        }
    }catch(err){
        res.status(500).json({status: 500,message: err.stack})
    }
}
    
    


//delete
exports.deleteBook = async (req,res)=>{
        try{
            const bookCode = req.params.id;
            // const bookID = await bookService.findByCode(bookCode);
            if(bookCode){
                await bookmodel.findByIdAndDelete(bookCode)
                res.status(201).json("data deleted successfully")
            }else{
                res.status(500).json({message:"book does not exist"})
            }
        }catch(err){
            // res.status(500).json({status: 500,message: err.stack})
            res.status(500).json({message:"book does not exist"})
        }
            
        
        
    }
