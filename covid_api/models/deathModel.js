const db = require("../lib/db");

function createDeathRecord(deathData, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "INSERT INTO covid_death SET ?",
                deathData,
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

function getDeathRecords(callback) {
    db.getConnection()
        .then((connection) => {
            connection.query("SELECT * FROM covid_death", (error, results) => {
                connection.release();
                callback(error, results);
            });
        })
        .catch((error) => {
            callback(error);
        });
}

function getDeathRecordById(id, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "SELECT * FROM covid_death WHERE id = ?",
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

function updateDeathRecord(id, deathData) {
    return new Promise((resolve, reject) => {
        db.getConnection()
            .then((connection) => {
                connection.query(
                    "UPDATE covid_death SET country_name = ?, cases = ?, deaths = ? WHERE id = ?",
                    [deathData.country_name, deathData.cases, deathData.deaths, id],
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

function deleteDeathRecord(id, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "DELETE FROM covid_death WHERE id = ?",
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

function deleteAllDeathRecords(callback) {
    db.getConnection()
        .then((connection) => {
            connection.query("DELETE FROM covid_death", (error, results) => {
                connection.release();
                callback(error, results);
            });
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = {
    createDeathRecord,
    getDeathRecords,
    getDeathRecordById,
    updateDeathRecord,
    deleteDeathRecord,
    deleteAllDeathRecords,
};
