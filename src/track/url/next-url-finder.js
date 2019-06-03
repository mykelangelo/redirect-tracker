module.exports =
    findMetaRedirectUrl =>
        response =>

            response.headers.location || findMetaRedirectUrl(response);
