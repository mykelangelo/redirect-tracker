const uniqueId = require('uuid/v4');

module.exports = (printer, e) => printer.end(`\n\nerror occurred;\n${e}\n report id: ${uniqueId()}`);
