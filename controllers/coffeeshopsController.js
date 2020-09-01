const db = require("../models");

// Defining methods for the CoffeeshopsController
module.exports = {
  findAll: function(req, res) {
    console.log("sdafkolaj")
    db.Coffeeshop
      .find({})
      .sort({ date: -1 })
      .then(dbModel =>{
      console.log("aoidsfgj", dbModel)
      res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Coffeeshop
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Coffeeshop
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Coffeeshop
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Coffeeshop
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
