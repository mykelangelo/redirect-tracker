const urls = require('url');

module.exports = proxy => url => {
    const options = urls.parse(url);

    if (proxy) {
        options.agent = proxy;
    }

    return options;
};
