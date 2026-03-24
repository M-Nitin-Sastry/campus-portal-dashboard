const Admission = require("../models/Admission");

exports.createAdmission = async (req, res) => {
  try {
    const { type, branches } = req.body;

    const newAdmission = new Admission({ type, branches });
    await newAdmission.save();

    res.status(201).json({ message: "Admission type created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAdmission = await Admission.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updatedAdmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBranchSeats = async (req, res) => {
  try {
    const { id, branchName } = req.params;
    const { allocatedSeats } = req.body;

    const admission = await Admission.findById(id);
    if (!admission) return res.status(404).json({ message: "Admission type not found" });

    const branch = admission.branches.find(b => b.name === branchName);
    if (!branch) return res.status(404).json({ message: "Branch not found" });

    branch.allocatedSeats = allocatedSeats;

    await admission.save();

    res.json({ message: "Branch seat allocation updated successfully", admission });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
