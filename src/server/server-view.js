module.exports = {

        pipeFavicon:
            printer => {

                printer.writeHead(200, {'Content-Type': 'image/x-icon'});
                printer.pipeIcon('resources/favicon.ico');
            }
    }
