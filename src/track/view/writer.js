module.exports =
    printer => ({

        writeResponseInfo:
            responseInfo => printer.write(responseInfo),

        writeUrlMessage:
            urlMessage => printer.write(urlMessage),

        writeFinalMessage:
            finalMessage => printer.write(finalMessage),

        writeErrorMessage:
            errorMessage => printer.end(errorMessage)
    });
