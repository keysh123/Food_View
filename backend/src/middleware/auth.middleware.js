const foodPartnerModel = require('../models/foodpartner.model')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authFoodPartnerMiddleware = async (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token,"1234")
        const foodPartner=await foodPartnerModel.findOne({
            _id:decoded.id
        })
        req.foodPartner=foodPartner
        next()
    }
    catch(err){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
}
const authUserMiddleware = async (req,res,next) => {
    const token = req.cookies.token;
    // console.log(token);
    
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token,"1234")
        const user=await userModel.findOne({
            _id:decoded.id
        })
        if(!user){
             return res.status(401).json({
            message : "Unauthorized"
        })
        }
        req.user=user
        console.log(user);
        
        next()
    }
    catch(err){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
}

module.exports={
    authFoodPartnerMiddleware,
    authUserMiddleware
}