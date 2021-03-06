// const express = require('express');
// const path = require('path');

// const app = express();

// //middelwares
// app.use(express.static('public'));

// //app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"))
// //rutas: get, post, put, delete

// app.set('puerto',process.env.PORT || 3001)

// app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

// app.get('/home', (req, res)=> {
//     let htmlPath = path.resolve(__dirname,'/views/home.html')
//     res.sendFile(htmlPath);
// });

// app.get('/register', (req,res)=> {
//     let htmlPath = path.resolve(__dirname,'/views/register.html');
//     res.sendFile(htmlPath);
// });

// app.get('/login', (req,res)=> {
//     let htmlPath = path.resolve(__dirname,'/views/login.html');
//     res.sendFile(htmlPath);
// });

const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});



