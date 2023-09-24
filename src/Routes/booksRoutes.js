const express = require("express");
const Books = require("../Model/Books.schema");
const app = express();
app.use(express.json());
app.get("/books", async (req, res) => {
  try {
    const books = await Books.find({});
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
    const books = await Books.findById(req.params.id);
    if (!books) {
      return res.status(404).json({ message: "Books not found" });
    }
    res.json(books);
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
app.delete("/Book/:id", async (req, res) => {
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
module.exports = app;
