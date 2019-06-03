const urlApiFabric = require('./url/api');
const viewApiFabric = require('./view/api');
const trackUrl = require('./tracker')(urlApiFabric, viewApiFabric);

module.exports = endpoint => ({
    action:
        (printer, url, urlsVisited, proxy) =>
            trackUrl(printer, url, urlsVisited, proxy),

    endpoint
});
