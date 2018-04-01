"use strict";
exports.__esModule = true;
var HauptstimmeJs = /** @class */ (function () {
    function HauptstimmeJs() {
    }
    /**
     * Adds commas to a number
     * @param {number} number
     * @param {string} locale
     * @return {string}
     */
    HauptstimmeJs.getLocalString = function (number, locale) {
        if (locale === void 0) { locale = 'en'; }
        return number.toLocaleString(locale) + ' hello world';
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
