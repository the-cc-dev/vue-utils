module.exports = (function () {
    return function install(Vue, options) {
        Vue.router.beforeEach(function(to, from, next) {
            Vue.router.loading = true;

            next();
        });

        Vue.router.afterEach(function() {
            Vue.router.loading = false;
        });
    };
})();