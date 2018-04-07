"use strict";
exports.__esModule = true;
var instruments_data_1 = require("./data/instruments.data");
var search_service_1 = require("./services/search.service");
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
        return JSON.stringify(search_service_1.SearchService.getChordsAndScalesByNotes([0, 5]));
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
