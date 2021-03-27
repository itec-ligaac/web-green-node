//Libraries
const express = require('express')
const dotenv  = require("dotenv")

//Express properties
const app     = express()
const port    = 8000

app.listen(port, ()=>
{
  console.info(`Greenode Backend server listening on port: ${process.env.PORT}`)
});
