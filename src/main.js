const MAX_REDIRECTS = 20;
const PORT = 80;
const proxies = [
    {code: 'NL', host: 'http://45.76.43.163:8080'},
    {code: 'IT', host: 'http://93.39.228.188:3128'},
    {code: 'US', host: 'http://138.68.242.141:8090'}
];
const trackEndpoint = '/track';
const pulseEndpoint = '/pulse';
const proxyEndpoint = '/proxy';
const secretEndpoint = '/emojipsum';
const proxyQueryParamString = '?proxy=';


const findMetaRedirectUrl = require('./service/meta-detector');
const findNextUrl = require('./service/next-url-finder')(findMetaRedirectUrl);
const cureRelativeUrl = require('./validation/url-curer');
const detectProtocol = require('./validation/protocol-detector');
const throwIfLooped = require('./validation/loop-detector')(MAX_REDIRECTS);
const throwIfNotUrl = require('./validation/url-detector');
const urlValidator = require('./validation/url-validator')(throwIfLooped, throwIfNotUrl);
const stringifier = require('./service/array-stringifier');
const trackView = require('./view/tracker-view')(stringifier);
const optionsFabric = require('./service/options-fabric');
const trackUrl = require('./tracker')(findNextUrl, detectProtocol, cureRelativeUrl, urlValidator, trackView, optionsFabric);

const detectProxy = require('./service/proxy-detector')(proxies);
const showServerPulse = require('./view/pulse-displayer');
const displayProxies = require('./view/proxies-displayer')(proxies, stringifier);
const displayHelp = require('./view/help-displayer')(trackEndpoint, pulseEndpoint, proxyEndpoint, proxyQueryParamString);
const router = require('./router');
const handleError = require('./view/error-handler');
const serverView = require('./view/server-view')(stringifier);
const urlExtractor = require('./service/first-url-extractor')(trackEndpoint.length);
const printer = require('./view/general-view');
const emojipsum = require('./view/easter-egg');
const server = require('./server')(detectProxy, trackEndpoint, trackUrl, pulseEndpoint, showServerPulse, proxyEndpoint,
    displayProxies, displayHelp, router, handleError, serverView, urlExtractor, printer, secretEndpoint, emojipsum, PORT);

server.run();
