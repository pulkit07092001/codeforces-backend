const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO, (err) => {
  if (err) console.error(err);
  else console.log("mongoDB connected");
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world!!!!!!!!!");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
