const MAX_REDIRECTS = 20;

const https = require('https');
const http = require('http');
const urlModule = require('url');

const detectProtocol = require('./protocol-detector')(https, http);
const constructOptions = require('./options-fabric')(urlModule);
const validateUrl = require('./url-validator')(MAX_REDIRECTS);
const cure = require('./relative-to-absolute-curer');
const findUrlInMeta = require('./meta-url-detector');
const findNextUrl = require('./next-url-finder')(findUrlInMeta);

module.exports = (links, proxy) => ({

    getMessageIfUrlIsInvalid:
        url => validateUrl(url, links),

    detectProtocol:
        url => detectProtocol(url),

    absolutifyUrl:
        (url, previousAbsoluteUrl) => cure(url, previousAbsoluteUrl),

    findNextUrl:
        response => findNextUrl(response),

    constructOptions:
        url => constructOptions(proxy, url)
});
