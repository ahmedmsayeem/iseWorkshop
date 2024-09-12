const express = require('express')
const app = express()
const path = require('path');
const PORT=3000;
const data1 = require('./data/1.json');
const data2=require('./data/2.json')
const data3=require('./data/3.json')
const homeEjs=require('./data/ejs.json')


// Define the directory where your HTML files (views) are located
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));




app.get("/",(req,res)=>{
    console.log("u tried to access / ")
    res.render('index',{data:"any data we can send from backend to frontend"})

})


app.get("/1",(req,res)=>{
    
   
    res.render('programs',{data:"1",programs:data1})

})

app.get("/2",(req,res)=>{
    
   
    res.render('programs',{data:"2",programs:data2,homeEjs:homeEjs})

})
app.get("/3",(req,res)=>{
    
   
    res.render('programs',{data:"3",programs:data3})

})


app.get("/data1",(req,res)=>{
    res.send(data1);
})
app.get("/data2",(req,res)=>{
    res.send(data2);
})
app.get("/data3",(req,res)=>{
    res.send(data3);
})


app.get("/skibidi",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))

})

app.listen(PORT,(req,res)=>{
    console.log("listening at port 3000 of computer")
})