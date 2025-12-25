const express = require("express");
const router = express.Router();
const { createFood , getFoodItems , getFoodPartnerData } = require("../controllers/food.controller");
const { authFoodPartnerMiddleware , authUserMiddleware } = require("../middleware/auth.middleware");
const multer = require('multer')

const upload = multer({
    storage : multer.memoryStorage()
})
router.post("/", authFoodPartnerMiddleware, upload.single('video'),createFood);
router.get("/",authUserMiddleware,getFoodItems)
router.get("/food-partner/:id",authUserMiddleware,getFoodPartnerData);

module.exports = router;


