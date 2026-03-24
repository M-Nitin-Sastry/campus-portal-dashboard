const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },          // Company name
    package: { type: String, required: true },          // e.g. "8 LPA"
    studentsPlaced: { type: Number, required: true },   // e.g. 12
    status: {
      type: String,
      enum: ["Completed", "Upcoming"],
      default: "Completed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("placement", placementSchema);
