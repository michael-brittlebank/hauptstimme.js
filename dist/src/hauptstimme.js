"use strict";
exports.__esModule = true;
var instruments_data_1 = require("./data/instruments.data");
var HauptstimmeJs = /** @class */ (function () {
    function HauptstimmeJs() {
    }
    /**
     * This class provides a entry point for helper functions used in the module
     */
    HauptstimmeJs.getAvailableInstruments = function () {
        return instruments_data_1.InstrumentsData.getAvailableInstruments();
    };
    HauptstimmeJs.demo = function () {
        return JSON.stringify({});
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
