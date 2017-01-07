module.exports = (function () {

    return function(Vue, options, router) {
        options = options || {};

        router.afterEach(function (to, from) {
            var frTab = from.meta[options.key || 'pageTop'],
                toTab = to.meta[options.key || 'pageTop'];

            if (
                (from && from.fullPath === to.fullPath) || // Same routes don't trigger, but in case they do some day.
                ( ! (frTab && toTab && frTab.group === toTab.group))
            ) {
                document.body.scrollTop = 0;
            }
        });
    };

})();