const fs = require('fs');

const printer = require('./printer')(fs);
const arrayToString = require('./array-stringifier');

module.exports = ({
    printer: printer,
    arrayToString: arrayToString
});
