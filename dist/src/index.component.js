"use strict";
exports.__esModule = true;
var Hauptstimme = /** @class */ (function () {
    function Hauptstimme() {
    }
    /**
     * Adds commas to a number
     * @param {number} number
     * @param {string} locale
     * @return {string}
     */
    Hauptstimme.getLocalString = function (number, locale) {
        if (locale === void 0) { locale = 'en'; }
        return number.toLocaleString(locale);
    };
    return Hauptstimme;
}());
exports.Hauptstimme = Hauptstimme;
