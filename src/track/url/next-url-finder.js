module.exports = findMetaRedirectUrl => response => {
    let nextUrl = response.headers.location;

    if (!nextUrl) {

        nextUrl = findMetaRedirectUrl(response);
    }

    return nextUrl;
};
