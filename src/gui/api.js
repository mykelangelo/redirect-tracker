module.exports =
    function (endpoint, html) {

        return {

            endpoint,

            action:
                printer => {
                    printer.writeHead(200, {'Content-Type': `text/html; charset=utf8`});
                    printer.end(html);
                }
        };
    };