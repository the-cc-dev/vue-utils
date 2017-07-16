module.exports = (function () {

    function _top(transition, key) {
        var routes = transition.matched.filter(function (route) {
            return route.meta.hasOwnProperty(key);
        });

        if (routes.length) {
            return routes[routes.length - 1].meta[key];
        }
    }

    return function install(Vue, options) {
        var key;

        options = options || {};

        key = options.key || 'top';

        Vue.router.afterEach(function (to, from) {
            var frTab = _top(from, key),
                toTab = _top(to, key);

            if (
                (from && from.fullPath === to.fullPath) || // Same routes don't trigger, but in case they do some day.
                ( ! (frTab && toTab && frTab.group === toTab.group))
            ) {
                document.body.scrollTop = 0;
            }
        });
    };

})();