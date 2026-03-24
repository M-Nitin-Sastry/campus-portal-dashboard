const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ["KCET", "COMEDK", "Management"], 
    required: true 
  },
  branches: [
    {
      name: { type: String, required: true },  // CSE, ISE, AIML, etc
      totalSeats: { type: Number, required: true },
      allocatedSeats: { type: Number, default: 0 }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Admission", AdmissionSchema);
