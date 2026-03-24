const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  status: { type: String, enum: ["Upcoming", "Completed"], default: "Upcoming" }
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
