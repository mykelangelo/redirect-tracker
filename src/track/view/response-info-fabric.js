module.exports =
    stringifier =>
        response =>
            `${getCookies(response, stringifier)}\n- Status: ${response.statusCode} ${response.statusMessage}\n\n`;

function getCookies(res, toString) {
    const cookies = res.headers['set-cookie'];

    return cookies ? '  \u{1F36A} ' + toString(cookies, ';') : '';
}
