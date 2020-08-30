const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/shopFinder"
);

const coffeeSeed = [
  {
    title: "Starbucks",
    latitude: "25.760480",
    longitude: "-80.425520",
    shopType: "coffee",
    date: new Date(Date.now())
  },
  {
    title: "Cafe Chantilly",
    latitude: "25.760290",
    longitude: "-80.399920",
    date: new Date(Date.now())
  },
  {
    title: "Dunkin' Donuts",
    latitude: "25.759480",
    longitude: "-80.431430",
    date: new Date(Date.now())
  },
];

db.Coffeeshop.insertMany(coffeeSeed).then(function(){
  console.log("inserted Coffeeshop")
}).catch(function(error){
  console.log(error)
})