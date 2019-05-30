module.exports = (endpointsWithActions, defaultAction) => ({
    detectAction: stringBeginningWithEndpoint => {

        for (const endpointsWithAction of endpointsWithActions) {
            if (stringBeginningWithEndpoint.startsWith(endpointsWithAction.endpoint)) {

                return endpointsWithAction.action;
            }
        }

        return defaultAction;
    }
});
