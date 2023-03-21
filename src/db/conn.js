const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://raj:raj@atlascluster.buxi0b2.mongodb.net/RajDynamic?",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log(error);
  });
