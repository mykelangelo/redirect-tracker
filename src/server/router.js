module.exports =
    (apis, defaultAction) => ({
        detectAction: stringBeginningWithEndpoint => {
            
            const foundApi = apis.find(api => stringBeginningWithEndpoint.startsWith(api.endpoint));
            
            return foundApi ? foundApi.action : defaultAction;
        }
    });
