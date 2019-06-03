module.exports = uniqueIdGenerator =>
    error =>
        `\n\nerror occurred;\n${error}\n report id: ${uniqueIdGenerator()}`;
