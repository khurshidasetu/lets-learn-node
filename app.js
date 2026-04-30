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

app.get('/about-blah',(req,res)=>{
    console.log("about blah page",req.url)

    res.redirect('/about-us');
})

app.use((req,res)=>{
    console.log("404 page",req.url)

    res.status(404).sendFile('./views/404.html',{root:__dirname});
})

// error page 
app.use((err,req,res)=>{
   console.log("error",err)
   res.status(404).sendFile('./views/404.html',{root:__dirname})
});