const contentRegex = new RegExp(`(?<=<meta http-equiv="refresh" content=".*url=).*(?=">)`);

module.exports = response => {

    let body = '';

    response.on('data', chunk => {

        body += chunk;

        if (body.length > 40000) {

            const matchArray = body.match(contentRegex);

            if (!matchArray) {

                return;
            }

            return matchArray[0];
        }
    });
};
