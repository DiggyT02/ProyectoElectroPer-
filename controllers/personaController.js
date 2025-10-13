const db = require('../config/db')//Acceso a la BD
const path = require('path') //Manejo de rutas

//Definir las acciones(métodos) con la entidad "persona"
const obtenerTodas = async (req,res) => {
  try{ 
    const sql = "SELECT * FROM personas"
    const [rows] = await db.query(sql)
    res.json(rows)
  }catch(e){
    console.error(e)
    res.status(500).json({error : 'Error en la conexión'})
  }
}

const crear = async (req, res) => {
  
}

const actualizar = async (req, res) => {
  //..
}

const eliminar = async (req, res) => {
  //..
}

module.exports = {
  obtenerTodas,
  crear,
  actualizar,
  eliminar
}