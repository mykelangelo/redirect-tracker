module.exports =
    stringifier =>
        proxies =>

            `Here's the list of available proxies: \n${stringifier(proxies, '},')}\n\n usage: /...?proxy=XX`;
