const urlApiFabric = require('./url/api');
const viewApiFabric = require('./view/api');
const trackUrl = require('./tracker')(urlApiFabric, viewApiFabric);

module.exports = trackEndpoint => ({
    action:
        (printer, url, urlsVisited, proxy) =>
            trackUrl(printer, url, urlsVisited, proxy),

    endpoint:
    trackEndpoint
});
