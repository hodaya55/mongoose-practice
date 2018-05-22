var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number
});

var Book = mongoose.model('Book', bookSchema);
//This is simply saying that when we require this file(in server.js) we want to return the object that was assigned to module.export
module.exports = Book;


