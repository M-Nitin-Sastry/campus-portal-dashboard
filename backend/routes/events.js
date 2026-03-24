const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Create Event
router.post("/", eventController.createEvent);

// Get All Events
router.get("/", eventController.getEvents);

// Delete Event by ID
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
