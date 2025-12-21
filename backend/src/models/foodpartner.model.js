const mongoose = require('mongoose')
const foodpartnerSchema = mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique:true
    },
    password : {
        type : String
    },
    contactName : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    
},{
    timestamps : true
})

const foodPartnerModel=mongoose.model("foodpartner",foodpartnerSchema)

module.exports=foodPartnerModel