const mongoose = require("mongoose");

module.exports = () => {
  const connectionParanms = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION, connectionParanms);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("could not connected to database!");
  }
};
