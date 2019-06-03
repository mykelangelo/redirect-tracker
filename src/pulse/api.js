const pulseMessage = require('./pulse-exporter');
const writePulse = require('./pulse-writer');

module.exports = endpoint => ({

    endpoint,

    action:
        printer => writePulse(pulseMessage, printer)
});
