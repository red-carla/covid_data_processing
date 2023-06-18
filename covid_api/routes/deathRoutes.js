const express = require("express");
const router = express.Router();
const deathController = require("../controllers/deathController");

router.post("/", deathController.createDeathRecord);
router.get("/", deathController.getDeathRecords);
router.get("/:id", deathController.getDeathRecordById);
router.put("/:id", deathController.updateDeathRecord);
router.delete("/:id", deathController.deleteDeathRecord);
router.delete("/", deathController.deleteAllDeathRecords);

module.exports = router;
