const mongoose = require("mongoose");

const activityScheme = new mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, required: true},
    status: { type: String, required: true},
  });

  module.exports = mongoose.model("Activity", activityScheme);