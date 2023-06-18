const xsd = require('xsd-schema-validator');

function validateXML(xmlData, xmlSchema) {
    return new Promise((resolve, reject) => {
        xsd.validateXML(xmlData, xmlSchema, (error, validationErrors) => {
            if (error) {
                reject(error);
            } else if (validationErrors && validationErrors.length > 0) {
                resolve(validationErrors);
            } else {
                resolve(null);
            }
        });
    });
}

module.exports = {
    validateXML
};
