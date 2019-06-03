module.exports =
    (apis, defaultAction) => ({
        detectAction: stringBeginningWithEndpoint => {

            for (const api of apis) {

                if (stringBeginningWithEndpoint.startsWith(api.endpoint)) {

                    return api.action;
                }
            }

            return defaultAction;
        }
    });
