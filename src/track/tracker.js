

module.exports =
    (urlApiFabric, viewApiFabric) =>
        function (printer, url, proxy) {

            const urlsVisited = [];
            const urlApi = urlApiFabric(urlsVisited, proxy);
            const viewApi = viewApiFabric(printer);
            viewApi.writeHeaders();
            return trackUrl(url);

            function trackUrl(url) {

                const invalid = urlApi.getMessageIfUrlIsInvalid(url);

                if (invalid) {

                    viewApi.writeError(invalid);

                    return;
                }

                const protocol = urlApi.detectProtocol(url);
                const options = urlApi.constructOptions(url);

                protocol.get(options, response => {

                    viewApi.writeUrlAndResponse(url, response);

                    let nextUrl = urlApi.findNextUrl(response);

                    nextUrl ? trackUrl(urlApi.absolutifyUrl(nextUrl, url)) : viewApi.writeFinalMessage();
                });
            }
        };
