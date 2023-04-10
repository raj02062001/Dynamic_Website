const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const ejs = require("ejs");
const { kStringMaxLength } = require("buffer");

const staticPath = path.join(__dirname, "views");

app.set("view engine", "ejs");
app.use(express.static(staticPath));

mongoose.connect(
  "mongodb+srv://raj:raj@atlascluster.buxi0b2.mongodb.net/RajDynamic?retryWrites=true&w=majority"
);

const usersSchema = {
  name: String,
  email: String,
  phone: Number,
  message: String,
};

const user = mongoose.model("user", usersSchema);

app.get("/", (req, res) => {
  user.find({}, function (err, users) {
    res.render("table", {
      usersList: users,
    });
  });
});

app.listen(4000, function () {
  console.log("server is running");
});
