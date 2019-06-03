const uniqueId = require('uuid/v4');

const commonApi = require('../../common/api');
const formErrorMessage = require('./error-message-fabric')(uniqueId);
const formResponseInfo = require('./response-info-fabric')(commonApi.arrayToString);
const formUrlMessage = require('./url-message-fabric');
const finalMessage = require('./final-message-exporter');
const writer = require('./writer');

module.exports = printer => ({

    writeResponse:
        response => writer(printer).writeResponseInfo(formResponseInfo(response)),

    writeUrl:
        url => writer(printer).writeUrlMessage(formUrlMessage(url)),

    writeFinalMessage:
        () => writer(printer).writeFinalMessage(finalMessage),

    writeError:
        message => writer(printer).writeErrorMessage(formErrorMessage(message))
});
