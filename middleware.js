  //Gestionar los archivos binarios => jpg, png. pdf. mp3 etc
  //Node > "multer"

  const multer = require("multer")
  const path = require("path")
 
  const uploadDir = "./public/uploads"

  //Gestión de escritura(¿Dónde se guardaran?)
  const storage = multer.diskStorage({
    
    destination: (req, file ,cb) => {
      cb(null, uploadDir)
    },
    filename : (req, file, cb) => {
    //NOTA : No podemos guardar el archivo con el nombre original
    //Sufijo unico
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() *1E9)
    cb(null, 'foto-' + uniqueSuffix + path.extname(file.originalname))
    }
  })

  //Filtro (¿qué tipo de archivos está permitido)
  const fileFilter = (req, file, cb) => {
  //Expresion regular
    const allowedTypes = /jpeg|jpg|png|gif|webp/i
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = allowedTypes.test(file.mimetype)

    //Si la extensión es correcta, podemos GRABAR el archivo
    if  (mimeType && extname){
      return cb(null, true)
    }else{
     return cb(new Error('Solo se permiten extensiones de imágenes'))
    }
  }

  //Configuración "multer"
  //* 1024 (kb) * 1024(mb)
  const upload = multer ({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024},
    fileFilter: fileFilter
  })

  //Exportar
  module.exports = { upload }