const HttpsProxyAgent = require('https-proxy-agent');

module.exports = proxies => queryString => {

    if (!queryString) {

        return;
    }

    const proxyCode = queryString.proxy;

    if (!proxyCode) {

        return;
    }

    const proxy = proxies.find(e => e.code === proxyCode);

    if (!proxy) {

        return;
    }

    return new HttpsProxyAgent(proxy);
};
