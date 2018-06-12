var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: []
});

// model
var Person = mongoose.model("Person", personSchema);
module.exports = Person;