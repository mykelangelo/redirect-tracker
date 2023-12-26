module.exports =
    (http, urlModule, view, printerFabric) =>
        (router, urlExtractor, detectProxy) =>

            http.createServer((request, response) => {

                const relativeUrlWithQuery = urlModule.parse(request.url, true);
                const relativeUrl = relativeUrlWithQuery.pathname;

                const printer = printerFabric(response);

                if (request.method === 'GET' && relativeUrl === '/favicon.ico') {

                    view.pipeFavicon(printer);

                    return;
                }

                const proxy = detectProxy(relativeUrlWithQuery.query);

                const action = router.detectAction(relativeUrl);

                action(printer, urlExtractor(relativeUrl), proxy);
            });
