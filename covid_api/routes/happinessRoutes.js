const express = require("express");
const router = express.Router();
const happinessController = require("../controllers/happinessController");

router.post("/", happinessController.createHappinessRecord);
router.get("/", happinessController.getHappinessRecords);
router.get("/:id", happinessController.getHappinessRecordById);
router.put("/:id", happinessController.updateHappinessRecord);
router.delete("/:id", happinessController.deleteHappinessRecord);
router.delete("/", happinessController.deleteAllHappinessRecords);

module.exports = router;
