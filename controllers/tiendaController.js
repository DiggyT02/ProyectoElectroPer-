const db = require('../config/db')

exports.crearTienda = async (req, res) => {
    const {tienda} = req.body

    if (!tienda){
      return res.status(400).json({mensaje: 'Falta completar los campos'})
    }

  const sql = "INSERT INTO tiendas (tienda) VALUES (?)"

  try{
    const [result] = await db.query(sql, [tienda])
    res.status(201).json({
      id: result.insertId,
      mensaje: 'Registrado correctamente'
    })
  }catch(e){
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}
//Listar
exports.obtenerTiendas = async (req, res) => {
  //1. Preparar consulta
  const sql = "SELECT * FROM tiendas ORDER BY id DESC"
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

 


