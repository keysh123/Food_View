const mongoose = require("mongoose");
// KXVJiZPq9pkpqKHi
// mongodb+srv://admin:KXVJiZPq9pkpqKHi@cluster0.nmryusq.mongodb.net/
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:KXVJiZPq9pkpqKHi@cluster0.nmryusq.mongodb.net/food_view"
    );
     console.log("connected");
  } catch (err) {
    console.log(err);
  }
 
};
module.exports = connectToDB;
