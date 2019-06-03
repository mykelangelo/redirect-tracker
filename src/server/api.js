const http = require('http');
const urlModule = require('url');
const HttpsProxyAgent = require('https-proxy-agent');

const commonApi = require('../common/api');
const view = require('./server-view')(commonApi.arrayToString);
const detectProxyFabric = require('./proxy-detector')(HttpsProxyAgent);
const urlExtractorFabric = require('./first-url-extractor');
const server = require('./server')(http, urlModule, view, commonApi.printer);
const routerFabric = require('./router');

module.exports =
    (PORT, featuresApis, defaultAction, trackEndpointLength, proxies) => ({

        runServer:
            () => server(
                routerFabric(featuresApis, defaultAction),
                urlExtractorFabric(trackEndpointLength),
                detectProxyFabric(proxies)
            ).listen(PORT)
    });

