(function (window, undefined) {
    var _chorus = function (properties) {
        if ( window === this ) {
            return new _chorus(properties);
        }
        if (typeof properties === 'string')
            var result = document.querySelectorAll(properties);
        if ( result.length > 0 ) {
            for (var i = 0; i < result.length; i++) {
                this[i] = result[i];
            }
            this.length = result.length;
        }
        return this;
    };
    _chorus.fn = _chorus.prototype = {
        hide: function(fadespeed,fn) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },
        show: function(fadespeed,fn) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'inherit';
            }
            return this;
        }
    };
    _chorus.version = {
        version: 0.1,
        lastUpdated: "05-27-2015"
    };
    window._chorus = _chorus;
})(window);