const PORT = process.env.PORT || 80;
const proxies = [
    {code: 'US', host: 'http://68.183.188.100:3128'},
    {code: 'BR', host: 'http://177.101.247.140:3128'}];
const trackEndpoint = '/track/';
const pulseEndpoint = '/pulse';
const proxiesEndpoint = '/proxies';
const secretEndpoint = '/emojipsum';
const proxyQueryParamString = '?proxy=';


const trackApi = require('./track/api')(trackEndpoint);
const pulseApi = require('./pulse/api')(pulseEndpoint);
const emojisApi = require('./emojipsum/api')(secretEndpoint);
const proxiesApi = require('./proxies/api')(proxiesEndpoint, proxies);
const featuresApis = [trackApi, pulseApi, emojisApi, proxiesApi];
const helpApi = require('./help/api')(trackEndpoint, pulseEndpoint, proxiesEndpoint, proxyQueryParamString);

const serverApi = require('./server/api')(PORT, featuresApis, helpApi.action, trackEndpoint.length, proxies);
serverApi.runServer();