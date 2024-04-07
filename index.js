//Dependancies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const connectDB = require('./controllers/connect');
const app = express();
const router = require('./routes/fetchData');



//Middlewares
app.use(express.json());
app.use('/' , router);


//Database conncetion function:
connectDB();



//App listening

app.listen(process.env.PORT, (req,res)=>
{
    console.log("Listening onn port");
})

