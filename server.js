const {app, catalogoProductos} = require("./index")

app.get("/", (req, res) => {
    res.render("Dashboard" ,{
        layout: "Dashboard", 
        productos: catalogoProductos, 
    })
})
