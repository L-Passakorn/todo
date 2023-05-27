const mongoose = require("mongoose");
const Activity = require('./Activity')

const statusScheme = new mongoose.Schema({
    status: { type: String, require: true},
});

module.exports = mongoose.model("Status", statusScheme)