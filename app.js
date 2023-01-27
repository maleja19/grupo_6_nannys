const express = require("express")
const path = require("path")

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    let htmlVentanas = (path.resolve(__dirname, './views/home.html'))
    res.sendFile(htmlVentanas)
})

app.get('/registro', (req, res) => {
    let htmlVentanas = (path.resolve(__dirname, './views/SignIn.html'))
    res.sendFile(htmlVentanas)
})

app.get('/compras', (req, res) => {
    let htmlVentanas = (path.resolve(__dirname, './views/compras.html'))
    res.sendFile(htmlVentanas)
})

app.get('/form1', (req, res) => {
    let htmlVentanas = (path.resolve(__dirname, './views/RegistrarseNineras.html'))
    res.sendFile(htmlVentanas)
})

app.get('/form2', (req, res) => {
    let htmlVentanas = (path.resolve(__dirname, './views/RegistrarseParents.html'))
    res.sendFile(htmlVentanas)
})


app.listen(3030,()=>console.log("servidor escuchando"));
