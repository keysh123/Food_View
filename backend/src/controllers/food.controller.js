const foodModel = require('../models/food.model')
const {uploadFile} = require('../services/storage.service')
// const {v4 : uuid} = require("uuid")



const createFood = async (req,res) => {
    const { v4: uuid } = await import("uuid");
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    const fileUploadResult = await uploadFile(req.file.buffer,uuid())
    console.log(fileUploadResult);  

}

module.exports = {
    createFood
}