module.exports =
    (url, fullUrl) =>
        url.startsWith('http') ? url : new URL(url, fullUrl).href;
