const healthModel = require("../models/healthModel");
const { validateHealthJSON } = require("../validators/jsonValidator");
const { validateXML } = require("../validators/xmlValidator");
const xml2js = require("xml2js");
const getRawBody = require("raw-body");

// Read
function getHealthRecords(req, res) {
    healthModel.getHealthRecords((error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to retrieve records from database" });
        }
        return res.status(200).json(results);
    });
}

// Read single based on country ID
function getHealthRecordById(req, res) {
    const id = req.params.id;
    healthModel.getHealthRecordById(id, (error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to retrieve record from database" });
        }
        if (!results) {
            return res.status(404).json({ error: "Record not found" });
        }
        return res.status(200).json(results);
    });
}

// Create
function createHealthRecord(req, res) {
    const contentType = req.headers["content-type"];

    if (contentType === "application/json") {
        const validationErrors = validateHealthJSON(req.body);
        if (validationErrors) {
            return res
                .status(400)
                .json({ error: "JSON validation failed", details: validationErrors });
        } else {
            const healthData = {
                id: req.body.id,
                country_name: req.body.country_name,
                health_expenditure: req.body.health_expenditure,
            };

            healthModel.createHealthRecord(healthData, (error, results) => {
                if (error) {
                    return res
                        .status(500)
                        .json({ error: "Failed to insert record into database" });
                }
                return res
                    .status(201)
                    .json({ message: "Record created successfully from JSON" });
            });
        }
    } else if (contentType === "application/xml") {
        getRawBody(req, (err, xmlData) => {
            if (err) {
                return res.status(400).json({ error: "Invalid XML data" });
            }
            const parser = new xml2js.Parser({
                explicitArray: false,
                normalizeTags: false,
            });
            parser.parseString(xmlData, async (err, result) => {
                if (err) {
                    return res.status(400).json({ error: "Failed to parse XML data" });
                }
                const xmlSchema = "./schemas/healthSchema.xsd";
                const validationErrors = await validateXML(xmlData, xmlSchema);
                if (validationErrors) {
                    console.error("XML validation errors:", validationErrors);
                    return res
                        .status(400)
                        .json({
                            error: "XML validation failed",
                            details: validationErrors,
                        });
                }
                const healthData = {
                    id: result.health_expenditure.id,
                    country_name: result.health_expenditure.country_name,
                    health_expenditure: result.health_expenditure.health_expenditure,
                };
                healthModel.createHealthRecord(healthData, (error, results) => {
                    if (error) {
                        return res
                            .status(500)
                            .json({ error: "Failed to insert record into database" });
                    }
                    return res
                        .status(201)
                        .json({ message: "Record created successfully from XML" });
                });
            });
        });
    } else {
        return res.status(400).json({ error: "Unsupported media type" });
    }
}

// Update
async function updateHealthRecord(req, res) {
    const contentType = req.headers["content-type"];

    if (contentType === "application/json") {
        const id = req.params.id;
        const healthData = {
            country_name: req.body.country_name,
            health_expenditure: req.body.health_expenditure,
        };

        try {
            const result = await healthModel.updateHealthRecord(id, healthData);
            res.status(200).json({ message: "Record updated successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to update" });
        }
    } else if (contentType === "application/xml") {
        getRawBody(req, (err, xmlData) => {
            if (err) {
                return res.status(400).json({ error: "Invalid XML data" });
            }

            const parser = new xml2js.Parser({
                explicitArray: false,
                normalizeTags: false,
            });
            parser.parseString(xmlData, async (err, result) => {
                if (err) {
                    return res.status(400).json({ error: "Failed to parse XML data" });
                }

                const id = req.params.id;
                const XMLhealthData = {
                    country_name: result.health_expenditure.country_name,
                    health_expenditure: result.health_expenditure.health_expenditure,
                };
                try {
                    const result = await healthModel.updateHealthRecord(
                        id,
                        XMLhealthData
                    );
                    res.status(200).json({ message: "Record updated successfully" });
                } catch (error) {
                    res.status(500).json({ error: "Failed to update" });
                }
            });
        });
    } else {
        return res.status(400).json({ error: "Unsupported media type" });
    }
}

// Delete
function deleteHealthRecord(req, res) {
    const id = req.params.id;
    healthModel.deleteHealthRecord(id, (error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to delete record from database" });
        }
        return res.status(200).json({ message: "Record deleted successfully" });
    });
}

// Delete all
function deleteAllHealthRecords(req, res) {
    healthModel.deleteAllHealthRecords((error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to delete records from database" });
        }
        return res
            .status(200)
            .json({ message: "All records deleted successfully" });
    });
}

module.exports = {
    getHealthRecords,
    getHealthRecordById,
    createHealthRecord,
    updateHealthRecord,
    deleteHealthRecord,
    deleteAllHealthRecords,
};
