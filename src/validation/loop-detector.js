module.exports = limit => (linksVisited, url) => {
    throwIfUrlRepeats(linksVisited, url);
    throwIfLimitReached(linksVisited, limit);
    linksVisited.push(url);
};

function throwIfUrlRepeats(linksVisited, url) {
    if (linksVisited.includes(url)) {

        throw 'Redirection loop detected! Bae!)';
    }
}

function throwIfLimitReached(linksVisited, limit) {
    if (linksVisited.length >= limit) {

        throw 'Too much redirects, I\'m tired, godspeed';
    }
}
