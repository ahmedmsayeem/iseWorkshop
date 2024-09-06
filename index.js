const express = require('express')
const app = express()
const path = require('path');
const PORT=3000;
hljs = require('highlight.js/lib/common');
const data = require('./data/1.json');


// Define the directory where your HTML files (views) are located
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get("/",(req,res)=>{
    console.log("u tried to access / ")
    // res.send("Good morning brother")
    console.log(data)
    res.render('index',{data:"any data we can send from backend to frontend"})

})


app.get("/1",(req,res)=>{
    
   
    res.render('programs',{data:"1",hljs,programs:data})

})

app.get("/2",(req,res)=>{
    
   
    res.render('programs',{data:"2"})

})
app.get("/3",(req,res)=>{
    
   
    res.render('programs',{data:"3"})

})



app.get("/skibidi",(req,res)=>{
    console.log("u tried to access /skibidi ")
    // res.send("Good morning rizzlord ohio")
    res.sendFile(path.join(__dirname,'views','index.html'))

})

app.listen(PORT,(req,res)=>{
    console.log("listening at port 3000 of computer")
})