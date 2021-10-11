const mongoose = require("mongoose");

const HorseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { _id: false }
);

module.exports = HorseSchema;
