module.exports =
    (urlApiFabric, viewApiFabric) =>
        (printer, url, urlsVisited, proxy) =>
            track(urlApiFabric(urlsVisited, proxy), viewApiFabric(printer), url);

const track = (urlApi, viewApi, url) => {

    const invalid = urlApi.getMessageIfUrlIsInvalid(url);

    if (invalid) {

        viewApi.writeError(invalid);

        return;
    }

    viewApi.writeUrl(url);

    const protocol = urlApi.detectProtocol(url);
    const options = urlApi.constructOptions(url);

    protocol.get(options, response => {

        viewApi.writeResponse(response);

        let nextUrl = urlApi.findNextUrl(response);

        if (!nextUrl) {

            viewApi.writeFinalMessage();

            return;
        }

        nextUrl = urlApi.getAbsoluteUrlEvenIfUrlIsRelative(nextUrl, url);

        track(urlApi, viewApi, nextUrl);
    });
};
