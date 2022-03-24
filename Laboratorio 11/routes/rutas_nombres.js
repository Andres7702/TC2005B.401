const express = require('express');
const router = express.Router();
const path = require('path');

const nombrescontroller = require('../controllers/nombres_controller');

router.get('/nuevo', nombrescontroller.agregar_get);

router.post('/nuevo', nombrescontroller.agregar_post);

router.use('/', nombrescontroller.lista);


module.exports = router; 