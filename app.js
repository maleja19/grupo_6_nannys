const express = require("express")
const session = require("express-session");
const morgan = require('morgan');
const routerMain = require('./src/routes/main');
const routerProducts = require('./src/routes/products');
const routerUsers = require('./src/routes/users');
const routerApiUsers =require('./src/routes/userApiRouter')
const routerApiproduct =require('./src/routes/productApiRouter')
const path=require('path');
const methodOverride=require("method-override");
const port = process.env.PORT || 3030;
const userLoggedMiddlewares=require('./src/middlewares/userLoggedMiddlewares');


const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'))



app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
    secret: "shh, it's a secret",
    resave: false,
    saveUninitialized: false
}));

app.use(userLoggedMiddlewares);


app.use(morgan('dev'));

app.use(express.static('public'));
 
app.use(routerMain)
app.use(routerProducts)
app.use(routerUsers)
app.use(routerApiUsers)
app.use(routerApiproduct)

app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));
