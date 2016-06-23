module.exports = (function () {

    return function install(Vue, options, router) {
        var i, ii, utils = [];

        options = options || {};

        if (options && options.constructor === Array) {
            for (i = 0, ii = options.length; i < ii; i++) {
                utils[options[i]] = {};
            }

            options = utils;
        }

        router = Vue.router || router;

        for (i in options) {
            require('./utils/' + i + '.js')(Vue, options[i], router);
        }
    }
    
})();