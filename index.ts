'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
export function getLocalString(number: number, locale: string): string {
    return number.toLocaleString(locale);
}