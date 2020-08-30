const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeshopSchema = new Schema({
  title: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true},
  synopsis: String,
  date: { type: Date, default: Date.now }
});


const Coffeeshop = mongoose.model("Coffeeshop", coffeeshopSchema);

module.exports = Coffeeshop;
