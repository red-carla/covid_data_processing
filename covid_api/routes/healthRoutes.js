const express = require("express");
const router = express.Router();
const healthController = require("../controllers/healthController");

router.post("/", healthController.createHealthRecord);
router.get("/", healthController.getHealthRecords);
router.get("/:id", healthController.getHealthRecordById);
router.put("/:id", healthController.updateHealthRecord);
router.delete("/:id", healthController.deleteHealthRecord);
router.delete("/", healthController.deleteAllHealthRecords);

module.exports = router;
