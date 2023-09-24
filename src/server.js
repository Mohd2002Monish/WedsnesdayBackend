const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
const port = process.env.PORT;
const DB = process.env.DB;
const booksRoutes = require("./Routes/booksRoutes");

app.use("/", booksRoutes);

mongoose.connect(DB).then(() => {
  app.listen(port, () => {
    console.log(`server started on ${port}`);
  });
});
