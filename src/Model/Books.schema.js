const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  authorBiography: String,
  authorNationality: String,
  authorBirthDate: Date,
  title: {
    type: String,
    required: true,
  },
  coverImage: String,
  genre: String,
  publicationDate: Date,
  isFree: Boolean,
});

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;
