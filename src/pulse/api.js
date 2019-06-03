const pulseMessage = require('./pulse-exporter');
const writePulse = require('./pulse-writer');

module.exports = endpoint => ({

    action:
        printer => writePulse(pulseMessage, printer),

    endpoint: endpoint
});