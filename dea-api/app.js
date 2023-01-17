const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const morgan = require ('morgan');
const dotenv = require('dotenv');
dotenv.config();


// db
mongoose.connect("mongodb+srv://dea-api:deamoji@cluster0.wq63ulc.mongodb.net/?retryWrites=true&w=majority",process.env.MONGO_URL).then (() => console.log('DB connected'))

mongoose.connection.on("error", err =>{
    console.log(`DBcd  connection error: ${err.message}`)
})


// bring in routes
const { getPosts } = require("./routes/post");



// middleware
app.use(morgan("dev"));



app.get("/", getPosts);


const port = process.env.PORT || 8080;
app.listen(port, ()=> { 
    console.log ( `A Node JS API is listening on port : ${port}`)
}); 