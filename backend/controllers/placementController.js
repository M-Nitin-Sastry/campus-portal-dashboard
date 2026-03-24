const Placement = require("../models/Placement");

// CREATE new placement record
exports.createPlacement = async (req, res) => {
  try {
    const placement = new Placement(req.body);
    await placement.save();
    res.status(201).json({ message: "Placement record created successfully", placement });
  } catch (error) {
    res.status(500).json({ message: "Failed to create placement record", error });
  }
};

// GET all placement records
exports.getPlacements = async (req, res) => {
  try {
    const placements = await Placement.find();
    res.status(200).json(placements);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch placements", error });
  }
};

// UPDATE placement record by ID
exports.updatePlacement = async (req, res) => {
  try {
    const updated = await Placement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update placement", error });
  }
};

// DELETE placement record by ID
exports.deletePlacement = async (req, res) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Placement record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete placement", error });
  }
};
