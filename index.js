const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const fs = require('fs')
//disponibilizacion de recursos
app.use("/bootstrapcss", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/bootstrapjs", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"))
app.use("/json", express.static(__dirname + "/json"))
app.use("/assets", express.static(__dirname + "/assets"))
app.use("/css", express.static(__dirname + "/css"))

app.use(express.json())


//declarar motor de plantillas
app.set("view engine", "handlebars")

app.engine("handlebars", exphbs({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials"
}))

//objeto con todos los productos
const catalogoProductos = JSON.parse(fs.readFileSync(__dirname + "/json/catalogo.json"))

app.listen(3000)

module.exports = {app, catalogoProductos}