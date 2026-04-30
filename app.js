const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res)=>{
    console.log("home page",req.url)

    // res.send('<h1>home page</h1>');
    res.sendFile('./views/index.html',{root:__dirname});
})

app.get('/about-us', (req, res)=>{
    console.log("about us page",req.url)

    // res.send('<h1>about us page</h1>');
    res.sendFile('./views/about-us.html',{root:__dirname});
})