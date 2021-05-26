const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let sellersSchema = new Schema({
  id: {type: String},
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Sellers", sellersSchema);
