const db = require("../lib/db");

function createHappinessRecord(happinessData, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "INSERT INTO world_happiness SET ?",
                happinessData,
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

function getHappinessRecords(callback) {
    db.getConnection()
        .then((connection) => {
            connection.query("SELECT * FROM world_happiness", (error, results) => {
                connection.release();
                callback(error, results);
            });
        })
        .catch((error) => {
            callback(error);
        });
}

function getHappinessRecordById(id, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "SELECT * FROM world_happiness WHERE id = ?",
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

function updateHappinessRecord(id, happinessData) {
    return new Promise((resolve, reject) => {
        db.getConnection()
            .then((connection) => {
                connection.query(
                    "UPDATE world_happiness SET country_name = ?, happiness_rank = ?, happiness_score = ? WHERE id = ?",
                    [
                        happinessData.country_name,
                        happinessData.happiness_rank,
                        happinessData.happiness_score,
                        id,
                    ],
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

function deleteHappinessRecord(id, callback) {
    db.getConnection()
        .then((connection) => {
            connection.query(
                "DELETE FROM world_happiness WHERE id = ?",
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

function deleteAllHappinessRecords(callback) {
    db.getConnection()
        .then((connection) => {
            connection.query("DELETE FROM world_happiness", (error, results) => {
                connection.release();
                callback(error, results);
            });
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = {
    createHappinessRecord,
    getHappinessRecords,
    getHappinessRecordById,
    updateHappinessRecord,
    deleteHappinessRecord,
    deleteAllHappinessRecords,
};
