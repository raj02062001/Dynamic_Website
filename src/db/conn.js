const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/RajDynamic")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log(error);
  });
