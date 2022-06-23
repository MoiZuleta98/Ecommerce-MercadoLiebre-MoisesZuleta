const express = require('express');
const app = express();
//middelwares
app.use(express.static('public'));

//app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"))
//rutas: get, post, put, delete

app.set('puerto',process.env.PORT || 3001)

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

app.get('/home', (req, res)=> {
    res.sendFile(__dirname + './views/home.html');
});

app.get('/register', (req,res)=> {
    res.sendFile(__dirname + './views/register.html');
});

app.get('/login', (req,res)=> {
    res.sendFile(__dirname + './views/login.html');
});


//en el package.json

// "start":"node app",
// "dev":"nodemon app.js",
// "start":"node app",
// "test": "echo \"Error: no test specified\" && exit 1"


