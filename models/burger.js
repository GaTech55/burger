// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (name, cb) {
    orm.create("burgers", ["burgers_name", "devoured"], [name, false], cb);
  },

  update: function (id, cb) {
    orm.update("burgers", function (res) {
      cb(res);
    });
  },
  // delete: function (condition, cb) {
  //   orm.delete("burger", condition, function (res) {
  //     cb(res);
  //   });
  // },
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
