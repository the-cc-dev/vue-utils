module.exports = (function () {

    return function install(Vue, options) {
        options = options || {};

        Vue.router.afterEach(function (to) {
            var i, ii, j, jj, meta, elements;

            if (to && to.meta && to.meta.meta) {
                meta = to.meta.meta;

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