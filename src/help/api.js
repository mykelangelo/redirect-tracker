const constructHelp = require('./help-fabric');
const writeHelp = require('./help-writer');

module.exports =
    (trackEndpoint, pulseEndpoint, proxiesEndpoint, proxyQueryParamString) => ({

        action:
            printer => writeHelp(
                constructHelp(trackEndpoint, pulseEndpoint, proxiesEndpoint, proxyQueryParamString),
                printer)
    });
