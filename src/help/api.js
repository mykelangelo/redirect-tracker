const constructHelp = require('./help-fabric');
const writeHelp = require('./help-writer');

module.exports =
    function (trackEndpoint, pulseEndpoint, proxiesEndpoint, proxyQueryParamString) {

        const helpMessage = constructHelp(trackEndpoint, pulseEndpoint, proxiesEndpoint, proxyQueryParamString);

        return {

            action:
                printer => writeHelp(helpMessage, printer)
        };
    };
