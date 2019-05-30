module.exports = (trackEndpoint, pulseEndpoint, proxyEndpoint, proxyQueryParamString) => printer =>
    () => printer.end(`Try one of the following endpoints:\n ${trackEndpoint}/{url} to track {url} redirecting\n` +
        ` ${pulseEndpoint} - to see server status\n ${proxyEndpoint} - to see list of provided proxies\n` +
        `ps: append ${proxyQueryParamString} and proxy code to the end if you want your traffic to be proxied`);
