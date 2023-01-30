const express = require("express")
const morgan = require('morgan');
const routerMain = require('./src/routes/main');

const port = process.env.PORT || 3030;

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(routerMain)


app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));
