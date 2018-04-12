"use strict";
exports.__esModule = true;
var instruments_data_1 = require("./data/instruments.data");
var search_service_1 = require("./services/search.service");
var scales_data_1 = require("./data/scales.data");
var chords_data_1 = require("./data/chords.data");
var Promise = require("bluebird");
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
            resolve(chords_data_1.ChordsData.getAvailableChords());
        });
    };
    HauptstimmeJs.search = function (notesArray) {
        return search_service_1.SearchService.getChordsAndScalesByNotes(notesArray);
    };
    HauptstimmeJs.demo = function () {
        return 'demo';
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
//# sourceMappingURL=hauptstimme.js.map