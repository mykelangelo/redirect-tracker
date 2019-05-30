module.exports = (proxies, stringifier) => printer =>
    () => printer.end(`Here are available proxies: \n${stringifier(proxies, '},')}\n\n usage: /...?proxy=XX`);
