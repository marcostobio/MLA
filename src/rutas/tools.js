const {Router} = require('express'); 
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const _ = require('underscore'); 
const router = Router(); 
const tools = require('../samples.json');


router.get('/',(req,res) => {
    res.send(tools)
})

router.post('/',(req,res) =>{
    const {marc,country,year,price}=req.body;
    if (marc && country && year && price){
       const id = tools.length +1;
       const newtool = {id, ...req.body}; 
       console.log(newtool);
       tools.push(newtool);
       res.json(tools);
       
        res.json('saved')
        
    }else{
        res.status(500)({error:'Error de cantidad de Datos'})
    }
    //res.send('Recibido');
})

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {marc,country,year,price}=req.body;
    if  (marc && country && year && price){
        _.each(tools,(tool, i) =>{
             if (tool.id == id) {
                tool.marc=marc;
                tool.country=country;
                tool.year=year;
                tool.price=price;
             } 
        });
        res.json(tools);
    }else{
        res.status(500).json({error:'There was an error'});
    }


})

router.delete('/:id', (req,res)=>{
    //console.log(req.params);
    const {id} = req.params;
    _.each(tools, (tool, i) =>{
        if (tool.id == id){
            tool.splice(i, 1);
        }
    })
    res.send(tools);
})

module.exports = router;