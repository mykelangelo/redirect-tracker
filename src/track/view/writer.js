module.exports =
    printer => ({

        writeResponseInfo:
            responseInfo => printer.write(responseInfo),

        writeUrlMessage:
            urlMessage => printer.write(urlMessage),

        writeFinalMessage:
            finalMessage => printer.end(finalMessage),

        writeErrorMessage:
            errorMessage => printer.end(errorMessage)
    });
