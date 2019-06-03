module.exports = (https, http) => url => {
    return url.startsWith('https') ? https : http;
};
