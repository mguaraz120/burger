const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function() {
    res.redirect("/burgers");
  });
});

router.post("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, condition, function(data) {
    res.redirect("/burgers");
  });
});

module.exports = router;