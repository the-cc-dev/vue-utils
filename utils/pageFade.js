module.exports = (function () {

    var _enter = null,
        _options = null;

    function _animateFade(el, step, direction, cb) {
        el.style.opacity = step * 0.1;
        
        if (step < 0 || step > 10) { cb(); return; }

        setTimeout(function () {
            _animateFade(el, step + 1 * direction, direction, cb);
        }, _options.duration);
    }

    function _fadeIn(el, done) {
        el.style.display = 'none';

        _enter = function () {
            el.style.display = null;
            el.style.opacity = 0;

            _animateFade(el, 0, 1, done);
        };
    }

    function _noFadeIn(el, done) {
        el.style.display = 'none';

        _enter = function () {
            el.style.display = null;
        };
    }

    function _fadeOut(el, done) {
        _animateFade(el, 10, -1, function () {
            _enter();
            done();
        });
    }

    function _noFadeOut(el, done) {
        setTimeout(function () {
            _enter();
            done();
        }, 50);
    }

    return function(Vue, options, router) {
        _options = options || {};

        _options.duration = (_options.duration || 400) / 10;

        Vue.transition('page-fade-both', {
            css: false,
            enter: _fadeIn,
            leave: _fadeOut
        });

        Vue.transition('page-fade-in', {
            css: false,
            enter: _fadeIn,
            leave: _noFadeOut
        });

        Vue.transition('page-fade-out', {
            css: false,
            enter: _noFadeIn,
            leave: _fadeOut
        });

        Vue.transition('page-fade-none', {
            css: false,
            enter: _noFadeIn,
            leave: _noFadeOut
        });
    };

})();