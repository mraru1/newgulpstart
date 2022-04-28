const del = require("del") /* npm i -D del */

//Configurations
const path = require("../config/path.js"); 

// Delete directory
const clear = () => {
   return del(path.root);
}

module.exports = clear;