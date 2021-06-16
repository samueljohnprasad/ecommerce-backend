const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const fs= require('fs')
require("dotenv").config();

//import routes
const authRoutes=require('./routes/auth')
//app
const app = express();

//database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`db is connected`);
  })
  .catch((err) => console.log(`bd connectin erroor ${err}`));

//midddleware -- are functions that run in btw server and client
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//route middleware
app.use('/api',authRoutes)
fs.readFileSync('./routes')

//port
const port = process.env.PORT || 3000;
//listener
app.listen(port, () => {
  console.log(`server is running on this port ${port}`);
});
