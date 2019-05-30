module.exports = (url, fullUrl) => {
    if (!url.startsWith('http')) {
        url = new URL(url, fullUrl).href;
    }
    return url;
};
