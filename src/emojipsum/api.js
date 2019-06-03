const constructEmojis = require('./emoji-exporter');
const writeEmojis = require('./emoji-writer')(constructEmojis);

module.exports =
    endpoint => ({

            endpoint,

            action:
                printer => writeEmojis(printer)
        });
