const Event = require("../models/event");

const findOneAndUpdate = async (result) => {
  try {
    const event = await Event.findOneAndUpdate(
      { "horse.id": result.horse.id },
      result,
      {
        upsert: true,
        new: true,
      }
    );
    return event;
  } catch (error) {
    return { mongoerror: error };
  }
};

module.exports = findOneAndUpdate;
