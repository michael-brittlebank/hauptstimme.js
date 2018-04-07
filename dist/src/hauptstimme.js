"use strict";
exports.__esModule = true;
var instruments_data_1 = require("./data/instruments.data");
var search_service_1 = require("./services/search.service");
var scales_data_1 = require("./data/scales.data");
var chords_data_1 = require("./data/chords.data");
var HauptstimmeJs = /** @class */ (function () {
    function HauptstimmeJs() {
    }
    /**
     * This class provides a entry point for helper functions used in the module
     */
    HauptstimmeJs.getAvailableInstruments = function () {
        return instruments_data_1.InstrumentsData.getAvailableInstruments();
    };
    HauptstimmeJs.getAvailableScales = function () {
        return scales_data_1.ScalesData.getAvailableScales();
    };
    HauptstimmeJs.getAvailableChords = function () {
        return chords_data_1.ChordsData.getAvailableChords();
    };
    HauptstimmeJs.search = function (notesArray) {
        return search_service_1.SearchService.getChordsAndScalesByNotes(notesArray);
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
