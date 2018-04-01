'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
export function getLocalString(number: number, locale: string = 'en'): string {
    return number.toLocaleString(locale);
}

export interface myInterface {
    thing1: string;
    thing2: number;
}