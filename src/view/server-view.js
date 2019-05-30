module.exports = stringifier => (printer, proxy) => {
    printer.writeHead(200, {'Content-Type': `text/plain; charset=utf8`}, stringifier);
    if (proxy) {
        printer.write(`Using proxy ${proxy.proxy.host}`);
    }
};
