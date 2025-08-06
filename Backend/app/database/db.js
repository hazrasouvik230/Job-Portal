const mongoose = require("mongoose");

async function configureDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully!");
    } catch (error) {
        console.log("Error occure while connecting to Database.", error);
    }
}

module.exports = configureDB;