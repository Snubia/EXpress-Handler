var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var data_ = { burgers: data };
        console.log(data_);
        res.render("index", data_);
    });
});  
  
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], 
                     [req.body.burger_name, req.body.devoured], 
                     function (result) {
                     res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var devoured = "id = " + req.params.id;
    console.log("devoured: " + devoured);

    burger.updateOne({ devoured: req.body.devoured }, 
        devoured, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var devoured = "id = " + req.params.id;
  
    burger.delete(devoured, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  // Export routes for server.js to use.
  module.exports = router;