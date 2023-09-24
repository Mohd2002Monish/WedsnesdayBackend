const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    biography: String,
    nationality: String,
    birthDate: Date,
    deathDate: Date,
  },
  coverImage: String,
  genre: {
    type: String,
    enum: ["Fiction", "Non-Fiction", "Mystery", "Romance", "Sci-Fi", "Fantasy"],
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Books", bookSchema);
