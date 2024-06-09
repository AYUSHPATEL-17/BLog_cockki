const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://ayushpatel34079:a17421742@blogdb.ho4u0oc.mongodb.net/");
    console.log("MOngodb Atlas Connected");
}

module.exports = db;
