const commonApi = require('../common/api');
const constructProxiesList = require('./proxies-list-fabric')(commonApi.arrayToString);
const writeProxiesList = require('./proxies-list-writer');

module.exports =
    (endpoint, proxies) => ({

            action:
                printer => writeProxiesList(
                    constructProxiesList(proxies),
                    printer),

            endpoint: endpoint
        });

