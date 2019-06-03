module.exports =
    stringifier => ({
        writeInfo:
            (printer, proxy) => {

                printer.writeHead(200, {'Content-Type': `text/plain; charset=utf8`}, stringifier);

                if (proxy) {

                    printer.write(`Using proxy ${proxy.proxy.host}`);
                }
            },

        pipeFavicon:
            printer => {

                printer.writeHead(200, {'Content-Type': 'image/x-icon'}, stringifier);
                printer.pipeIcon('resources/favicon.ico');
            }
    });
