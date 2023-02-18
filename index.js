/*npm i ejs**/

/*
    Creating server with Express
    1) npm init -y
    2) npm i express
    3) touch index.js
    4) add a nodemon, so we don't have to restart the server everytime that we make any modifucation
       sudo npm install -g nodemon
*/

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log("Server is Online!!");
})


app.get('/home', (req, res)=>{
    res.send("TESTE OK");// send to client string, json, JS, HTML.....
    console.log("testandooooo");
})
app.get('/r/:subreddit', (req, res)=>{
    console.log(req.params);
    res.send("I know it");
})
app.post('/cats', (req, res)=>{
    res.send('post request from ');
})

/*
    Query
*/
app.get('/search', (req, res)=>{
    res.send("I know 2");
})
