module.exports = (throwIfLooped, throwIfNotUrl) => links => ({
    validateOrThrow: (url) => {
        throwIfNotUrl(url);
        throwIfLooped(links, url);
    }
});
