const db = require('../config/db')

exports.crearCliente = async (req, res) => {

  const {apellidos, nombres, dni, telefono, direccion,tienda_id} = req.body

    if (!apellidos || nombres || dni || telefono || direccion || tienda_id){
    return res.status(400).json({mensaje: 'Falta completar los campos'})
    }

  
  const sql = "INSERT INTO clientes (apellidos, nombres, dni, telefono, direccion, tienda_id) VALUES (?,?,?,?,?,?)"

  try{
    
    const [result] = await db.query(sql, [apellidos, nombres, dni, telefono, direccion, tienda_id])

   
    res.status(201).json({
      id: result.insertId,
      mensaje: 'Registrado correctamente'
    })

  }catch(e){
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
    }
  }


exports.obtenerCliente = async (req, res) => {
  //1. Preparar consulta
  const sql = "SELECT id, apellidos, nombres, dni, telefono, direccion, tienda_id FROM clientes"

  //2. Transacción
  try{
    //3. Deserialización - PRIMER VALOR DEL ARREGLO
    const [result] = await db.query(sql)
    //4. Envíamos los resultados
    res.status(200).json(result)
  }catch(e){
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}