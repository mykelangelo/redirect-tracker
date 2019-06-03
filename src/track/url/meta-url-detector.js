const contentRegex = new RegExp(`(?<=<meta http-equiv="refresh" content=".*url=).*(?=">)`);
const MAX_BODY_SIZE_TO_READ = 40000;

module.exports = response => {

    let body = '';

    response.on('data', chunk => {

        body += chunk;

        if (body.length > MAX_BODY_SIZE_TO_READ) {

            const matchArray = body.match(contentRegex);

            if (!matchArray) {

                return;
            }

            return matchArray[0];
        }
    });
};
