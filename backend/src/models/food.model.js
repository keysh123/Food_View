const mongoose = require('mongoose')


const foodSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    video : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "foodpartner"
    }

},{timestamps : true})

const foodModel = mongoose.model("food",foodSchema)

module.exports = foodModel