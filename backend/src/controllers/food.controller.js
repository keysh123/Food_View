const foodModel = require('../models/food.model')
const {uploadFile} = require('../services/storage.service')
// const {v4 : uuid} = require("uuid")



const createFood = async (req,res) => {
    const { v4: uuid } = await import("uuid");
    const {name , description=""   } = req.body;
    // console.log(req.foodPartner);
    // console.log(req.body);
    // console.log(req.file);
    const fileUploadResult = await uploadFile(req.file.buffer,uuid())
    // console.log(fileUploadResult);
    const foodItem =await  foodModel.create({
        name, description , video:fileUploadResult.url , foodPartner:req.foodPartner._id

    })  
    res.status(201).json({
        message : "Food created successfully",
        food:foodItem
    })

}

const getFoodItems = async (req,res) => {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message : "Food Items fetched successfully",
        foodItems
    })
}

module.exports = {
    createFood,
    getFoodItems
}