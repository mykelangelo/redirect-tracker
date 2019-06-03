const MAX_LOG_MESSAGE_LENGTH = 250;

module.exports =
    fs =>
        response => ({

            write:
                message => {

                    response.write(message);
                    console.log(message);
                },

            end:
                message => {
                    response.end(message);

                    if (message.length > MAX_LOG_MESSAGE_LENGTH) {

                        message = `${message.slice(0, MAX_LOG_MESSAGE_LENGTH)}...(${message.length} symbols)\n`;
                    }

                    console.log(message);
                },

            writeHead:
                (code, headers, toString) => {

                    response.writeHead(code, headers);
                    console.log(`sent status ${code} and headers ${toString(headers, ';')}`);
                },

            pipeIcon:
                iconPath => {
                    fs.createReadStream(iconPath).pipe(response);
                }
        });
