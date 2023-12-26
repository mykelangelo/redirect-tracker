module.exports =
    (pulseMessage, printer) =>  {
        printer.writeHead(200, {'Content-Type': `text/plain; charset=utf8`});
        printer.end(pulseMessage);
    }
