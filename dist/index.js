'use strict';
exports.__esModule = true;
/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
function getLocalString(number, locale) {
    if (locale === void 0) { locale = 'en'; }
    return number.toLocaleString(locale);
}
exports.getLocalString = getLocalString;
