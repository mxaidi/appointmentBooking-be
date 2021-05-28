const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  id: {type: String},
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  status: {type: String},
  appointmentRequest: { type: String },
});

module.exports = mongoose.model("Users", usersSchema);
