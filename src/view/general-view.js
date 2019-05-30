module.exports = res => ({
    write: message => {
        res.write(message);
        console.log(message);
    },
    end: message => {
        res.end(message);
        if (message.length > 900) {
            message = `${message.slice(0, 50)}...(${message.length} symbols)\n`;
        }
        console.log(message);
    },
    writeHead: (code, headers, toString) => {
        res.writeHead(code, headers);
        console.log(`sent status ${code} and headers ${toString(headers, ';')}`);
    }
});
