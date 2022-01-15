// require express
const express = require("express");

// initialize express
const app = express();

// require path module
const path = require("path")

//require dotenv
const dotenv = require("dotenv");
// initialise dotenv
dotenv.config();

// require server 
require("./Server");



PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {console.log(`Server is listening on port ${PORT}`)})