const express = require('express')

//Enrutador
const router = express.Router()

//Acceso = Crear, Listar, etc...
const tiendaController = require('../controllers/tiendaController')


router.post('/', tiendaController.crearTienda)

router.get('/', tiendaController.obtenerTiendas)

module.exports = router