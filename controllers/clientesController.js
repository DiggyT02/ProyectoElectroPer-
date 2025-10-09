const db = require('../config/db')

exports.crearCliente = async (req, res) => {

  const {apellidos, nombres, dni, telefono, direccion,tienda_id} = req.body

    if (!apellidos || nombres || dni || telefono || direccion || tienda_id){
    return res.status(400).json({mensaje: 'Falta completar los campos'})

  
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
}
