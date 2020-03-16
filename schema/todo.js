const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    item: String,
    timestamp: Number
}, {
    versionKey: false
});

module.exports = mongoose.model("todo", todoSchema);