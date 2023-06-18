
const Ajv = require('ajv').default;
const ajvFormats = require('ajv-formats');

const happinessSchema = require('../schemas/happinessSchema.json');
const deathSchema = require('../schemas/deathSchema.json');
const healthSchema = require('../schemas/healthSchema.json');


const jsonValidator = new Ajv();
ajvFormats(jsonValidator);

const validateHappiness = jsonValidator.compile(happinessSchema);
const validateDeath = jsonValidator.compile(deathSchema);
const validateHealth = jsonValidator.compile(healthSchema);

function validateHappinessJSON(data) {
    const isValid = validateHappiness(data);
    return isValid ? null : validateHappiness.errors;
}

function validateDeathJSON(data) {
    const isValid = validateDeath(data);
    return isValid ? null : validateDeath.errors;
}

function validateHealthJSON(data) {
    const isValid = validateHealth(data);
    return isValid ? null : validateHealth.errors;
}
module.exports = {
    validateHappinessJSON, validateDeathJSON, validateHealthJSON
};
