const mongoose = require("mongoose");
const Status = require('./Status')

const activityScheme = new mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, required: true},
    statusId: mongoose.SchemaTypes.ObjectId,
    imgUrl: {type: String}
  });

  activityScheme.statics.findByTitle = function (title) {
    return this.where({ title: title })
  }

  // activityScheme.statics.findByStatus = function (status) {
  //   return this.where({ status: status })
  // }

  activityScheme.statics.findByStatus = function(statusId){
    return this.where({statusId})
  }

  module.exports = mongoose.model("Activity", activityScheme);