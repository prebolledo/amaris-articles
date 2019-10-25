import express from 'express'
import bodyParser from 'body-parser'

const server = (setRoutes) => {

    const app = express()

    //Middleware: usar compresion
    app.use(require('compression')({filter: () => true }))

    //Middleware: soporte para parseo de application/json en la data enviada por post
    app.use(bodyParser.json())

    //Middleware: soporte para parseo de application/x-www-form-urlencoded en la data enviada por post
    app.use(bodyParser.urlencoded({ extended: true }))
    
    //Devuelve el enrutador que se usara para definir los get/post/put/delete etc
    let router = express.Router()

    //Set routes
    setRoutes(app)

    //Ruta alive para testear el servicio
    app.use('/alive', (req, res, next) => {
        res.status(200).json({OK:true,hi:'hi'})
    })    

    //404 error
    app.use((req, res, next) => {
        res.status(404).json({
            code: 404,
            message: "Not Found"
        })
    })

    //500 error
    app.use(function(err, req, res, next) {
        res.status(500).json({
            code: 500,
            message: err.message || null,
            stack: err.stack || null,
        })
    })

    const PORT = process.env.PORT || 3000
    const HOST = process.env.HOST || '0.0.0.0'

    //Puerto
    app.set('port', PORT)
    
    //Host
    app.set('host', HOST)
    
    //Inicializa el server
    app.listen(PORT, HOST,() => {
        console.log(`listening on http://${HOST}:${PORT}`)
    })
}

export default server