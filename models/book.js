var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Author = require('./author');

var BookSchema = new Schema({
     title: String,
     // we are putting a schema and the ID of the author's collection (in db)
     // only thing we are storing is a mongoose ID 
     author: {type: Schema.Types.ObjectId, ref: 'Author'},
     image: String,
     releaseDate: String,
     // charac
     // characters is just a thing in an array, there is NO character collection unlike authors
     characters: [CharacterSchema] /// you can only embededd a schema
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;
module.exports.model = Book;   //is the way we access the db.find db.save db.create
module.exports.schema = BookSchema;  //what we use to embed (the skeleton)