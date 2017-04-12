var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");
//this line creates the mongo database name "book-app"

module.exports.Book = require("./book.js");
//this line exports the 
