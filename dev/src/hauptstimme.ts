export class HauptstimmeJs {
    /**
     * Adds commas to a number
     * @param {number} number
     * @param {string} locale
     * @return {string}
     */
    public static getLocalString(number: number, locale: string = 'en'): string {
        return number.toLocaleString(locale) + ' hello world';
    }

}