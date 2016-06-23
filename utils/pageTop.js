module.exports = (function () {

    return function(Vue, options, router) {
        options = options || {};

        router.afterEach(function (t) {
            var frTab = t.from[options.key || 'pageTop'],
                toTab = t.to[options.key || 'pageTop'];

            if (
                (t.from && t.from.fullPath === t.to.fullPath) || // Same routes don't trigger, but in case they do some day.
                ( ! (frTab && toTab && frTab.group === toTab.group))
            ) {
                document.body.scrollTop = 0;
            }
        });
    };

})();