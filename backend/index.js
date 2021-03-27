//Libraries
const express = require('express')
const dotenv  = require("dotenv")
dotenv.config();
const routes  = require("./routes/routes")

//Express properties
const app     = express()
const port    = 80

app.use("/api/", routes);

app.listen(port, ()=>
{
  console.info(`Greenode Backend server listening on port: ${port}`)
});
