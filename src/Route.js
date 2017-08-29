module.exports = (function () {
    return function install(Vue, options) {
        Vue.router.beforeEach((to, from, next) => {
            Vue.router.loading = true;

            next();
        });

        Vue.router.afterEach(() => {
            Vue.router.loading = false;
        });
    };
})();