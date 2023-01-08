const express = require('express');
const router = express.Router()
const Animal = require('../models/animal')
console.log('Router loaded');

const controller=require('../controllers/find');

router.get('/a', (req, res) => {
    res.send('<h1>live search</h1> <a href="/api/v1/products"></a>')
});
router.post('/getAnimal',controller.search) 

module.exports = router;