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








module.exports = router;
