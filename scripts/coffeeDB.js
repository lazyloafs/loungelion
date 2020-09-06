const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeeshops"
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
  {
    title: "Hookitah",
    latitude: "25.760830",
    longitude: "-80.425880",
    date: new Date(Date.now())
  },
  {
    title: "305 Hookah Lounge",
    latitude: "25.684400",
    longitude: "-80.417640",
    date: new Date(Date.now())
  },
  {
    title: "Oasis Lounge and Hookah bar",
    latitude: "25.727660",
    longitude: "-80.241260",
    date: new Date(Date.now())
  },
  {
    title: "Master Cigars",
    latitude: "25.760830",
    longitude: "-80.423150",
    date: new Date(Date.now())
  },
  {
    title: "HAVANA 1928 CIGAR LOUNGE",
    latitude: "42.929650",
    longitude: "-85.700670",
    date: new Date(Date.now())
  },
  {
    title: "Panther Coffee -Wynwood",
    latitude: "25.799947",
    longitude: "-80.199053",
    date: new Date(Date.now())
  },
  {
    title: "Panther Coffee - Miami Beach",
    latitude: "25.783695",
    longitude: "-80.141739",
    date: new Date(Date.now())
  },
  {
    title: "Eternity Coffee Roasters",
    latitude: "25.773216",
    longitude: "-80.190238",
    date: new Date(Date.now())
  },
  {
    title: "Pasion del Cielo Coffee",
    latitude: "25.751424",
    longitude: "-80.256931",
    date: new Date(Date.now())
  },
  {
    title: "Starbucks 3",
    latitude: "25.732147",
    longitude: "-80.382011",
    date: new Date(Date.now())
  },
  {
    title: "SpecialTea Lounge",
    latitude: "25.74658",
    longitude: "-80.370061",
    date: new Date(Date.now())
  },
  {
    title: "Friends Coffee LLC",
    latitude: "25.725194",
    longitude: "-80.315025",
    date: new Date(Date.now())
  },
  {
    title: "Starbucks 4",
    latitude: "25.855249",
    longitude: "-80.317636",
    date: new Date(Date.now())
  },
  {
    title: "Starbucks 5",
    latitude: "25.866719",
    longitude: "-80.294056",
    date: new Date(Date.now())
  },
  {
    title: "Dunkin'",
    latitude: "25.823006",
    longitude: "-80.270835",
    date: new Date(Date.now())
  },
];

db.Coffeeshop.insertMany(coffeeSeed).then(function(){
  console.log("inserted Coffeeshop")
}).catch(function(error){
  console.log(error)
})