const express = require('express')

//Actualización para desplegar el FRONT-END
const cors = require('cors') //Permisos sobre el contenido a desplegar
const path = require('path') //Express servir el frontend
const fs = require('fs').promises //Actiañozadp gestión


// ***Enrutadores***
const productoRoutes = require('./routes/productoRoutes')
const tiendaRoutes = require('./routes/tiendaRoutes')
const clientesRoutes = require('./routes/clientesRoutes')
const personaRoutes = require('./routes/personaRoutes')

const app = express()
const PORT = process.env.PORT || 3000 //Puerto de la App

//Actualización - Permisos cors
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

//Actualización - crear carpeta uploads
const uploadDir = './public/uploads'
fs.mkdir(uploadDir, { recursive: true  })


//Actualización:
//Servir los documentos HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')))
//Gestion de archivos
app.use(express.urlencoded({extended: true}))



//*** RUTEOS ***
//http://localhost:3000 -> public>index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Modulos del sistema(archivos html en public)
app.get('/clientes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'clientes.html'))
})

app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'productos.html'))
})

app.get('/tiendas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tiendas.html'))
})

app.get('/personas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'personas.html'))
})

//Comunicación se realizará JSON
app.use(express.json())

//Rutas
app.use('/api/productos', productoRoutes)
app.use('/api/tiendas', tiendaRoutes)
app.use('/api/clientes', clientesRoutes)
app.use('/api/personas', personaRoutes)


//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado http://localhost:${PORT}`)
})
