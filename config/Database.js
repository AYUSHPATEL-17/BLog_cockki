const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://ayushpatel34079:a17421742@cluster0.crfbu2y.mongodb.net/Blog");
    console.log("MOngodb Atlas Connected");
}

module.exports = db;