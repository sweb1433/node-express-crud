const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require('./swagger.json')

// create our express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// route
const routes = require('./Routes/Route')
app.use('/', routes)

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDoc)
  );

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
}) 