// const orm = require('../config/orm');

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(name, cb) {
//     orm.create("burgers", [ "burger_name", "devoured" ], [ name, false ], cb); 
   
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id; 
//     orm.update("burgers", {
//      devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;

var orm = require("../config/orm.js");

//following are the functions using burger specific input for the ORM

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res)
        });
    },
    updateOne: function (objColVals, devoured, cb) {
        orm.updateOne("burgers", objColVals, devoured, function (res) {
            cb(res)
        });
    },
    delete: function(devoured, cb){
        orm.delete("burgers", devoured, function(res){
            cb(res)
        });
    }
}

module.exports = burger;