const mongoose = require("mongoose");

const activityScheme = new mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, required: true},
    status: { type: String, default: 'planning'},
    imgUrl: {type: String}
  });

  activityScheme.statics.findByTitle = function (title) {
    return this.where({ title: title })
  }

  activityScheme.statics.findByStatus = function (status) {
    return this.where({ status: status })
  }

  module.exports = mongoose.model("Activity", activityScheme);