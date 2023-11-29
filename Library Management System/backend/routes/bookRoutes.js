const express= require('express')

const app = express();
const router = express.Router();
const bookController = require('../controllers/bookController')


app.use('/addbook',bookController.addbook)
app.use('/deletebook/:id',bookController.deleteBook)
app.use('/updatebook/:id',bookController.updateBook)
app.use('/getbooks',bookController.getBooks)

app.use("",router)

module.exports = app