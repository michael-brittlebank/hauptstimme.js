"use strict";
exports.__esModule = true;
var Promise = require("bluebird");
var instruments_data_1 = require("./data/instruments.data");
var search_service_1 = require("./services/search.service");
var scales_data_1 = require("./data/scales.data");
var chordPrimitives_data_1 = require("./data/chordPrimitives.data");
var HauptstimmeJs = (function () {
    function HauptstimmeJs() {
    }
    HauptstimmeJs.getAvailableInstruments = function () {
        return new Promise(function (resolve, reject) {
            resolve(instruments_data_1.InstrumentsData.getAvailableInstruments());
        });
    };
    HauptstimmeJs.getAvailableScales = function () {
        return new Promise(function (resolve, reject) {
            resolve(scales_data_1.ScalesData.getAvailableScales());
        });
    };
    HauptstimmeJs.getAvailableChords = function () {
        return new Promise(function (resolve, reject) {
            resolve(chordPrimitives_data_1.ChordPrimitivesData.compileChordPrimitivesIntoChords());
        });
    };
    HauptstimmeJs.search = function (searchRequest) {
        return search_service_1.SearchService.getChordsAndScalesByNotes(searchRequest);
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
//# sourceMappingURL=hauptstimme.js.map