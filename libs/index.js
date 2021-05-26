"use strict";

var libs = {};
var fs = require("fs");
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(file => {
    var cd = file.replace(".js", "");
    libs[cd] = require("./" + file);
  });

module.exports = libs;
