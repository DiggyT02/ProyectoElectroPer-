const express = require('express')

//Enrutador
const router = express.Router()

//Acceso = Crear, Listar, etc...
const clientesController = require('../controllers/clientesController')


router.post('/', clientesController.crearCliente)

router.get('/', clientesController.obtenerCliente)

module.exports = router