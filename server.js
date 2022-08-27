
const express = require('express');
const dotenv = require('dotenv');
const pageRouter = require('./routers/pageRouter');
const expressLayouts = require('express-ejs-layouts');
//config dotenv
dotenv.config();
const port = process.env.PORT || 4000;
//init express
const app = express();
//get data to form
app.use(express.json());
app.use(express.urlencoded({extended : false}));
//set ejs
app.set('view engine', 'ejs');
//set layouts folder
app.use(expressLayouts);
app.set('layout', 'layouts/app');
//create static folder
app.use(express.static('./public'));
//use page router
app.use(pageRouter);


//server listen
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})