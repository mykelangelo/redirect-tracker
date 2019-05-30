const https = require('https');
const http = require('http');

module.exports = url => {

    if (url.startsWith('https://')) {

        return https;
    } else if (url.startsWith('http://')) {

        return http;
    } else {

        throw `Your link ${url} is malformed! maybe prepend http/s protocol`;
    }
};
