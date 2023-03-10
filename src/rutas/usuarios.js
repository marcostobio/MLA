const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch'); 

router.get('/', async (req,res) =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json(); 
    console.log(respuesta);
    res.json(usuarios);
    res.send('usuarios');
})


module.exports = router;