const uniqueId = require('uuid/v4');

const commonApi = require('../../common/api');
const formErrorMessage = require('./error-message-fabric')(uniqueId);
const formResponseInfo = require('./response-info-fabric')(commonApi.arrayToString);
const formUrlMessage = require('./url-message-fabric');
const finalMessage = require('./final-message-exporter');
const writerFabric = require('./writer');

module.exports = function (printer) {

    const writer = writerFabric(printer);

    return {

        writeUrlAndResponse:
            (url, response) => {
                writer.writeUrlMessage(formUrlMessage(url));
                writer.writeResponseInfo(formResponseInfo(response));
            },

        writeFinalMessage:
            () => writer.writeFinalMessage(finalMessage),

        writeError:
            message => writer.writeErrorMessage(formErrorMessage(message))
    };
};
