var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js"); 
//db.books, means go through mongoose.connect which takes us to the db

module.exports.Author = require("./author.js");
