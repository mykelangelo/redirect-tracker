module.exports = MAX_REDIRECTS => (url, urlsVisited) => {

    if (!urlPattern.test(url)) {

        return `URL provided by user - {${url}} - is invalid`;
    }

    if (urlsVisited.includes(url)) {

        return 'Redirection loop detected! Bae!)';
    }

    if (urlsVisited.length >= MAX_REDIRECTS) {

        return `Max number of ${MAX_REDIRECTS} redirect sreached, I'm tired, godspeed`;
    }

    urlsVisited.push(url);
};

const urlPattern = new RegExp('^(https?:\\/\\/)' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
