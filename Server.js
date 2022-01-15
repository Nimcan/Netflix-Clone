
const mongoose = require("mongoose");

const DB = process.env.DB.replace("<password>", process.env.DB_password);

mongoose.connect(DB).then(()=> console.log("Connected to DB ✅")).catch(err => console.log(err));