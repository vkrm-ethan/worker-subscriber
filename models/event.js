const mongoose = require("mongoose");
const HorseSchema = require("./horse");

const EventSchema = new mongoose.Schema(
  {
    event: {
      type: String,
    },
    horse: {
      type: HorseSchema,
    },
    time: {
      type: Number,
    },
  },
  { _id: false }
);

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
