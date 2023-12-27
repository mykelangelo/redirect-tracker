const fs = require('fs');

const PORT = process.env.PORT || 80;
const proxies = [
    {"country": "Vietnam", "code": "VN", "host": "http://115.75.99.65:8080/"},
    {"country": "Thailand", "code": "TH", "host": "http://182.53.50.2:3128/"},
    {"country": "Indonesia", "code": "ID", "host": "http://103.76.12.42:80"}
];
const html = fs.readFileSync('src/ui/index.html');
const trackEndpoint = '/track/';
const pulseEndpoint = '/pulse';
const proxiesEndpoint = '/proxies';
const proxiesJsonEndpoint = '/json';
const guiEndpoint = '/gui';
const secretEndpoint = '/emojipsum';
const proxyQueryParamString = '?proxy=';


const trackApi = require('./track/api')(trackEndpoint);
const pulseApi = require('./pulse/api')(pulseEndpoint);
const emojisApi = require('./emojipsum/api')(secretEndpoint);
const proxiesApi = require('./proxies/api')(proxiesEndpoint, proxies);
const proxiesJsonApi = require('./proxies_json/api')(proxiesJsonEndpoint, proxies);
const guiApi = require('./gui/api')(guiEndpoint, html);
const featuresApis = [trackApi, pulseApi, emojisApi, proxiesApi, proxiesJsonApi, guiApi];
const helpApi = require('./help/api')(trackEndpoint, pulseEndpoint, proxiesEndpoint, proxyQueryParamString);

const serverApi = require('./server/api')(PORT, featuresApis, helpApi.action, trackEndpoint.length, proxies);
serverApi.runServer();
