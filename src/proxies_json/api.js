module.exports =
    function (endpoint, proxies) {

        return {

            endpoint,

            action: printer =>  {
                printer.writeHead(200, {'Content-Type': `text/plain; charset=utf8`});
                printer.end(proxies);
            }
        };
    };