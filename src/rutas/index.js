const {Router} = require('express'); //metodo para crear nuevas rutas
const router = Router(); //ejecuto router


//rutas

router.get('/test', (req,res)=>{
   // res.send({"Title": "Hola"} )  //desde de app por el metodo GET respondo con un texto

   const data = {
        "name":"Marcos",
        "website":"amasland.com"
   }

   res.send(data)

})

module.exports = router //exporto router