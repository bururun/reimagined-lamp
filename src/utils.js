// Utility functions for LampServer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 6
function newFunction6() {
    return 6;
}

module.exports = { formatData, validateInput };
