module.exports =
    (proxiesList, printer) => {
        printer.writeHead(200, {'Content-Type': `text/plain; charset=utf8`});
        printer.end(proxiesList);
    }
