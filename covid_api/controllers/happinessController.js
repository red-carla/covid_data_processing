const happinessModel = require("../models/happinessModel");
const { validateHappinessJSON } = require("../validators/jsonValidator");
const { validateXML } = require("../validators/xmlValidator");
const xml2js = require("xml2js");
const getRawBody = require("raw-body");

// Read
function getHappinessRecords(req, res) {
    happinessModel.getHappinessRecords((error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to retrieve records from database" });
        }
        return res.status(200).json(results);
    });
}

// Read single
function getHappinessRecordById(req, res) {
    const id = req.params.id;
    const acceptHeader = req.headers["accept"];

    happinessModel.getHappinessRecordById(id, (error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to retrieve record from database" });
        }
        if (!results) {
            return res.status(404).json({ error: "Record not found" });
        }

        const happinessData = results[0];

        if (acceptHeader === "application/xml") {
            const builder = new xml2js.Builder({ rootName: "world_happiness" });
            const xml = builder.buildObject(happinessData);
            res.set("Content-Type", "application/xml");
            return res.status(200).send(xml);
        } else {
            return res.status(200).json(happinessData);
        }
    });
}

// Create
function createHappinessRecord(req, res) {
    const contentType = req.headers["content-type"];

    if (contentType === "application/json") {
        const validationErrors = validateHappinessJSON(req.body);
        if (validationErrors) {
            return res
                .status(400)
                .json({ error: "JSON validation failed", details: validationErrors });
        } else {
            const happinessData = {
                id: req.body.id,
                country_name: req.body.country_name,
                happiness_rank: req.body.happiness_rank,
                happiness_score: req.body.happiness_score,
            };

            happinessModel.createHappinessRecord(happinessData, (error, results) => {
                if (error) {
                    return res
                        .status(500)
                        .json({ error: "Failed to insert record into database" });
                }
                return res
                    .status(201)
                    .json({ message: "Record created successfully" });
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
                const xmlSchema = "./schemas/happinessSchema.xsd";
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
                const happinessData = {
                    id: result.world_happiness.id,
                    country_name: result.world_happiness.country_name,
                    happiness_rank: result.world_happiness.happiness_rank,
                    happiness_score: result.world_happiness.happiness_score,
                };
                happinessModel.createHappinessRecord(
                    happinessData,
                    (error, results) => {
                        if (error) {
                            return res
                                .status(500)
                                .json({ error: "Failed to insert record into database" });
                        }
                        return res
                            .status(201)
                            .json({ message: "Record created successfully from XML" });
                    }
                );
            });
        });
    } else {
        return res.status(400).json({ error: "Unsupported media type" });
    }
}

// Update
async function updateHappinessRecord(req, res) {
    const contentType = req.headers["content-type"];

    if (contentType === "application/json") {
        const id = req.params.id;
        const happinessData = {
            country_name: req.body.country_name,
            happiness_rank: req.body.happiness_rank,
            happiness_score: req.body.happiness_score,
        };

        try {
            const result = await happinessModel.updateHappinessRecord(
                id,
                happinessData
            );
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
                const XMLhappinessData = {
                    country_name: result.world_happiness.country_name,
                    happiness_rank: result.world_happiness.happiness_rank,
                    happiness_score: result.world_happiness.happiness_score,
                };
                try {
                    const result = await happinessModel.updateHappinessRecord(
                        id,
                        XMLhappinessData
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
function deleteHappinessRecord(req, res) {
    const id = req.params.id;
    happinessModel.deleteHappinessRecord(id, (error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to delete record from database" });
        }
        return res.status(200).json({ message: "Record deleted successfully" });
    });
}

//Delete all
function deleteAllHappinessRecords(req, res) {
    happinessModel.deleteAllHappinessRecords((error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to delete all records from database" });
        }
        return res
            .status(200)
            .json({ message: "All records deleted successfully" });
    });
}

module.exports = {
    getHappinessRecords,
    getHappinessRecordById,
    createHappinessRecord,
    updateHappinessRecord,
    deleteHappinessRecord,
    deleteAllHappinessRecords,
};
