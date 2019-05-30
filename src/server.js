const http = require('http');
const urls = require('url');

module.exports = (detectProxy, trackEndpoint, trackUrl, pulseEndpoint, showServerPulse, proxyEndpoint, displayProxies, displayHelp,
                  router, handleError, serverView, urlExtractor, printerFabric, emojiEndpoint, gimmeEmoji, PORT) => ({
    run: () =>
        http.createServer((req, res) => {
            const relativeUrlWithQuery = urls.parse(req.url, true);

            const proxy = detectProxy(relativeUrlWithQuery.query);

            const printer = printerFabric(res);

            serverView(printer, proxy);

            const relativeUrl = relativeUrlWithQuery.pathname;

            const url = urlExtractor(relativeUrl);

            let links = [];
            const endpointsWithActions = [
                {endpoint: trackEndpoint, action: trackUrl(url, printer, links, proxy)},
                {endpoint: pulseEndpoint, action: showServerPulse(printer)},
                {endpoint: proxyEndpoint, action: displayProxies(printer)},
                {endpoint: emojiEndpoint, action: gimmeEmoji(printer)},
            ];

            const action = router(endpointsWithActions, displayHelp(printer)).detectAction(relativeUrl);

            try {
                action();
            } catch (e) {
                handleError(printer, e);
            }
        }).listen(PORT)
});
