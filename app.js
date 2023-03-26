const express = require("express")
const morgan = require('morgan');
const routerMain = require('./src/routes/main');
const routerProducts = require('./src/routes/products');
const routerUsers = require('./src/routes/users');
const path=require('path');
const methodOverride=require("method-override");
const port = process.env.PORT || 3030;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'))

app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(methodOverride("_method"))


app.use(morgan('dev'));

app.use(express.static('public'));

app.use(routerMain)
app.use(routerProducts)
app.use(routerUsers)

app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));
