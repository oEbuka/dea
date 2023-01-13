const express = require('express')
const app =  express()

app.get("/", (req, res) => {
    res.send("Hello word from node JS")
});


const port = 8080;
app.listen(port, ()=> { console.log ( `A Node JS PAI is listening on port : ${port}`)}); 