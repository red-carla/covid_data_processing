const deathModel = require("../models/deathModel");
const { validateDeathJSON } = require("../validators/jsonValidator");
const { validateXML } = require("../validators/xmlValidator");
const xml2js = require("xml2js");
const getRawBody = require("raw-body");

// Read
function getDeathRecords(req, res) {
    deathModel.getDeathRecords((error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to retrieve records from database" });
        }
        return res.status(200).json(results);
    });
}

// Read single
function getDeathRecordById(req, res) {
    const id = req.params.id;
    deathModel.getDeathRecordById(id, (error, results) => {
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
function createDeathRecord(req, res) {
    const contentType = req.headers["content-type"];

    if (contentType === "application/json") {
        const validationErrors = validateDeathJSON(req.body);
        if (validationErrors) {
            return res
                .status(400)
                .json({ error: "JSON validation failed", details: validationErrors });
        } else {
            const deathData = {
                id: req.body.id,
                country_name: req.body.country_name,
                cases: req.body.cases,
                deaths: req.body.deaths,
            };

            deathModel.createDeathRecord(deathData, (error, results) => {
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
                const xmlSchema = "./schemas/deathSchema.xsd";
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
                const deathData = {
                    id: result.covid_death.id,
                    country_name: result.covid_death.country_name,
                    cases: result.covid_death.cases,
                    deaths: result.covid_death.deaths,
                };
                deathModel.createDeathRecord(deathData, (error, results) => {
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
async function updateDeathRecord(req, res) {
    const contentType = req.headers["content-type"];

    if (contentType === "application/json") {
        const id = req.params.id;
        const deathData = {
            country_name: req.body.country_name,
            cases: req.body.cases,
            deaths: req.body.deaths,
        };

        try {
            const result = await deathModel.updateDeathRecord(id, deathData);
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
                const XMLdeathData = {
                    country_name: result.covid_death.country_name,
                    cases: result.covid_death.cases,
                    deaths: result.covid_death.deaths,
                };
                try {
                    const result = await deathModel.updateDeathRecord(id, XMLdeathData);
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
function deleteDeathRecord(req, res) {
    const id = req.params.id;
    deathModel.deleteDeathRecord(id, (error, results) => {
        if (error) {
            return res
                .status(500)
                .json({ error: "Failed to delete record from database" });
        }
        return res.status(200).json({ message: "Record deleted successfully" });
    });
}

// Delete all
function deleteAllDeathRecords(req, res) {
    deathModel.deleteAllDeathRecords((error, results) => {
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
    getDeathRecords,
    getDeathRecordById,
    createDeathRecord,
    updateDeathRecord,
    deleteDeathRecord,
    deleteAllDeathRecords,
};
