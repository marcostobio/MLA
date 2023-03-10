const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 5000); 
app.set('json spaces',2)


// middlewares
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

//rutas
app.use(require('./rutas/index')); 
app.use('/api/tools',require('./rutas/tools')); 
app.use('/api/usuarios',require('./rutas/usuarios'));

//iniciando el servidor

app.listen(app.get('port'), () =>{
        //bkstip de java
        console.log(`Server on port ${app.get('port')}`);
});



//npm i nodemon -D   (esto reinicia el servidor automaticamente despues de cambios)