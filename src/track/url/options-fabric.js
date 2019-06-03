module.exports =
    urlModule =>

        (proxy, url) => {

            const options = urlModule.parse(url);

            if (proxy) {

                options.agent = proxy;
            }

            return options;
        };
