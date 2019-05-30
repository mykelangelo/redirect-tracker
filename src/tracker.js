module.exports = (findNextUrl, detectProtocolOrThrow, cureRelativeUrl, validateUrlOrThrow, trackView, optionsFabric) => (url, printer, links, proxy) =>
    track(findNextUrl, detectProtocolOrThrow, cureRelativeUrl, validateUrlOrThrow(links), trackView(printer), optionsFabric(proxy), url);

const track = (findNextUrl, detectProtocolOrThrow, cureRelativeUrl, validateUrlOrThrow, view, optionsFabric, url) =>
    () => {
        validateUrlOrThrow.validateOrThrow(url);

        view.writeUrl(url);

        detectProtocolOrThrow(url).get(optionsFabric(url), res => {

            view.writeResponse(res);

            let nextUrl = findNextUrl(res);

            if (!nextUrl) {
                view.writeFinishMessage();

                return;
            }

            nextUrl = cureRelativeUrl(nextUrl, url);

            track(findNextUrl, detectProtocolOrThrow, cureRelativeUrl, validateUrlOrThrow, view, optionsFabric, nextUrl)();
        });
    };
