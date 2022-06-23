const express = require('express');
const path = require('path');

const app = express();

app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"))

//app.use('./static', express.static(__dirname + './public')) //middelwares
app.use(express.static('public'));

//rutas: get, post, put, delete

app.get('/home', (req, res)=> {
    let htmlPath = path.resolve(__dirname,'./views/home.html')
    res.sendFile(htmlPath);
});

app.get('/register', (req,res)=> {
    let htmlPath = path.resolve(__dirname,'./views/register.html');
    res.sendFile(htmlPath);
});

app.get('/login', (req,res)=> {
    let htmlPath = path.resolve(__dirname,'./views/login.html');
    res.sendFile(htmlPath);
});

//Cosas que voy a ocupar cuando deploye

//en el app.js

// app.set('puerto',process.env.PORT || 3000)



// app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

//en el package.json

//"start":"node app",
// "dev":"nodemon app.js",
// "start":"node app",
// "test": "echo \"Error: no test specified\" && exit 1"


