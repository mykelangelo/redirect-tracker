module.exports = (https, http) => url => {

    if (url.startsWith('https')) {

        return https;
    }

    return http;
};
