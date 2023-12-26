const http = require('http');
const urlModule = require('url');
const { HttpsProxyAgent } = require('https-proxy-agent');

const commonApi = require('../common/api');
const view = require('./server-view');
const detectProxyFabric = require('./proxy-detector')(HttpsProxyAgent);
const urlExtractorFabric = require('./first-url-extractor');
const server = require('./server')(http, urlModule, view, commonApi.printer);
const routerFabric = require('./router');

module.exports =
    function (PORT, featuresApis, defaultAction, trackEndpointLength, proxies) {

        const router = routerFabric(featuresApis, defaultAction);
        const urlExtractor = urlExtractorFabric(trackEndpointLength);
        const detectProxy = detectProxyFabric(proxies);

        return {

            runServer:
                () =>
                    server(router, urlExtractor, detectProxy)
                        .listen(PORT)
        };
    };
