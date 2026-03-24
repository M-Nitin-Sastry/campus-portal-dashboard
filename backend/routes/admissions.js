const express = require("express");
const router = express.Router();
const admissionController = require("../controllers/admissionController");

router.post("/", admissionController.createAdmission);
router.get("/", admissionController.getAdmissions);
router.put("/:id", admissionController.updateAdmission);
router.put("/:id/branch/:branchName", admissionController.updateBranchSeats);

module.exports = router;
