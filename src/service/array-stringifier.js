const space = '\n    ';
module.exports = (array, separator) => space +
    JSON.stringify(array)
        .split(separator)
        .join(separator + space)
        .slice(1, -1);
