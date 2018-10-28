const mongoose = require("mongoose");
const { Schema } = mongoose; // destructuering vesrion | basic: const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema); //create new collection called users
