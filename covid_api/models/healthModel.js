const db = require("../lib/db");

function createHealthRecord(healthData, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "INSERT INTO health_expenditure SET ?",
                healthData,
                (error, results) => {
                    connection.release();
                    callback(error, results);
                }
            );
        })
        .catch((error) => {
            callback(error);
        });
}

function getHealthRecords(callback) {
    db.getConnection()
        .then((connection) => {
            connection.query("SELECT * FROM health_expenditure", (error, results) => {
                connection.release();
                callback(error, results);
            });
        })
        .catch((error) => {
            callback(error);
        });
}

function getHealthRecordById(id, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "SELECT * FROM health_expenditure WHERE id = ?",
                id,
                (error, results) => {
                    connection.release();
                    callback(error, results);
                }
            );
        })
        .catch((error) => {
            callback(error);
        });
}

function updateHealthRecord(id, healthData) {
    return new Promise((resolve, reject) => {
        db.getConnection()
            .then((connection) => {
                connection.query(
                    "UPDATE health_expenditure SET country_name = ?, health_expenditure = ? WHERE id = ?",
                    [healthData.country_name, healthData.health_expenditure, id],
                    (error, results) => {
                        connection.release();
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    }
                );
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function deleteHealthRecord(id, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "DELETE FROM health_expenditure WHERE id = ?",
                id,
                (error, results) => {
                    connection.release();
                    callback(error, results);
                }
            );
        })
        .catch((error) => {
            callback(error);
        });
}

function deleteAllHealthRecords(callback) {
    db.getConnection()
        .then((connection) => {
            connection.query("DELETE FROM health_expenditure", (error, results) => {
                connection.release();
                callback(error, results);
            });
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = {
    createHealthRecord,
    getHealthRecords,
    getHealthRecordById,
    updateHealthRecord,
    deleteHealthRecord,
    deleteAllHealthRecords,
};
