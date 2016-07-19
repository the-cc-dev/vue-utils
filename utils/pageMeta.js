module.exports = (function () {

    return function(Vue, options, router) {
        options = options || {};

        router.afterEach(function (t) {
            var i, ii, j, jj, meta, elements;

            if (t.to && t.to.meta) {
                meta = t.to.meta;

                if (meta.title) { document.title = meta.title; }

                if (meta.meta) {
                    elements = document.getElementsByTagName('meta');

                    for (i = 0, ii = meta.meta.length; i < ii; i++) {
                        for (j = 0, jj = elements.length; j < jj; j++) {
                            if (elements[j].name === meta.meta[i].attribute || elements[j].property === meta.meta[i].attribute) {
                                elements[j].content = meta.meta[i].content;
                            }
                        }
                    }
                }
            }
        });
    };

})();