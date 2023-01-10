const express = require("express")
const path = require("path")

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/compras', (req, res) => {
    let htmlVentanas = (path.resolve(__dirname, './views/compras.html'))
    res.sendFile(htmlVentanas)
})

app.listen(3000, () => console.log("servidor escuchando"));