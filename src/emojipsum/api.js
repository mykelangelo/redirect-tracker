const constructEmojis = require('./emoji-exporter');
const writeEmojis = require('./emoji-writer')(constructEmojis);

module.exports =
    endpoint => ({

            action:
                printer => writeEmojis(printer),

            endpoint: endpoint
        });
