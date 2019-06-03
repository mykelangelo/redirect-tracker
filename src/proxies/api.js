const commonApi = require('../common/api');
const constructProxiesList = require('./proxies-list-fabric')(commonApi.arrayToString);
const writeProxiesList = require('./proxies-list-writer');

module.exports =
    function (endpoint, proxies) {

        const proxiesList = constructProxiesList(proxies);

        return {

            endpoint,

            action:
                printer => writeProxiesList(proxiesList, printer)
        };
    };
