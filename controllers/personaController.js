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

//req => require (petici+n/solicitud)
//req.params  : parámetro URL
//req.body    : parámetro JSON
//req.file    : Envía un archivo binario
const crear = async (req, res) => {
  try{
      //1. Recibir los datos del formulario(texto)
      const {apellidos, nombres, dni, telefono } = req.body
      //2.Recibir la fotografía
      const fotografia = req.file ? `/uploads/${req.file.filename}` : null;

      //3. Validación

      //4. Guardar nuevo registro
      const [result] = await db.query("INSERT INTO personas (apellidos, nombres, dni, telefono, fotografia) VALUES  (?,?,?,?,?)",
        [apellidos, nombres, dni, telefono, fotografia])

        res.status(201).json({
          id: result.insertId,
          message: 'Registro correcto'
        })
  }catch (e){
    console.error(e)

  }
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