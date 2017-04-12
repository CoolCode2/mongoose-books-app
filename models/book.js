var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	release_dat: String
});

var Book = mongoose.model('Book', BookSchema);
//  the 'Book' is the name of the collection

module.exports = Book;