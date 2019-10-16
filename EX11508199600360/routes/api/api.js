const express = require('express');
const router = express.Router();

const galeriaApi = require('./galeria');

router.get('/', (req, res, next)=>{
    res.status(200).json({"api":"Version 1."})
});

router.use('/galeria', galeriaApi);

module.exports = router;