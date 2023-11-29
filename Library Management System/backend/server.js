const express = require('express');
const{ default: mongoose} = require('mongoose');
const db = require('./middlewares/bB')
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())
db.connectToDB()

const router = require('./routes/bookRoutes')
app.use("",router)
app.listen(3001, ()=>{
    console.log('Server is started on 3001')
})