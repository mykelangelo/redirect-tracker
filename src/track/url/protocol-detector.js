module.exports =
    (https, http) =>
        url =>

            url.startsWith('https') ? https : http;
