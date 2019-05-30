module.exports = findMetaRedirectUrl => res => {
    let nextUrl = res.headers.location;

    if (!nextUrl) {
        nextUrl = findMetaRedirectUrl(res);
    }

    return nextUrl;
};
