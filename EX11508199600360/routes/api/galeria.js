const express = require('express');
var router = express.Router();


var thingsCollection = [];

var thingsStructure = {
    "id": 0,
    "title": '',
    "url": '',
    "thumbnailUrl": '',
    "album": ''
};

thingsCollection.push(
    Object.assign({},thingsStructure, {"id": new Date().getTime(), "title":"Valiente", "url": " ", "thumbnailUrl":" ", "album":"Peliculas"})
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
}); // GET

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
}); // POST


router.put('/:idElemento', (req, res, next)=>{
    var id = parseInt(req.params.idElemento);
    var update = req.body;
    var modifiedObject = {};
    var originalObject = {};
    thingsCollection = thingsCollection.map((e, i)=>{
        if (e.id === id){
            originalObject = Object.assign({}, e);
            return Object.assign(modifiedObject, e, req.body);
        }
        return e;
    });//mapeo
    res.status(200).json({"o": originalObject, "m": modifiedObject});
}) // PUT



router.delete('/:id', (req, res, next)=>{
    var id = parseInt(req.params.id);
    thingsCollection = thingsCollection.filter((e, i)=>{
        return (e.id !== id);
    }); 

    res.status(200).json({'msg': 'Galeria ' + id + ' fue eliminada con éxito.'});
}); // DELETE





module.exports = router;
