const express = require("express");
const Books = require("../Model/Books.schema");
const app = express();
app.use(express.json());
app.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;

  const skip = (page - 1) * perPage;

  try {
    const books = await Books.find({}).skip(skip).limit(perPage);
    if (!books) {
      return res.status(404).json({ message: "Books not found" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/book/:id", async (req, res) => {
  try {
    const book = await Books.findOne({ _id: req.params.id });
    if (!book) {
      return res.status(404).json({ message: "Books not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post("/books", async (req, res) => {
  try {
    const books = await Books.create(req.body);

    res.status(201).json(books);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.delete("/book/:id", async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put("/book/:id", async (req, res) => {
  try {
    const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book updated successfully", updatedBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
