const mongoose = require("mongoose");


const movieSchema = mongoose.Schema({
    tittle:{
        type:String,
        required:true,
        unique:true
    },
    description:{type:String},
    Largeimg:{type:String},
    imgTittle:{type:String},
    smallImg:{type:String},
    trailer:{type:String},
    movieVedio:{type:String},
    year:{type:String},
    limit:{type:Number},
    genre:{type:String},
    series:{type:Boolean, default:false}
}, {timesstamp:true})

// 

const movieModel = mongoose.model("Movies", movieSchema)


module.exports = movieModel




