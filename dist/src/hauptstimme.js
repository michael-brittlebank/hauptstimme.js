"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instruments_data_1 = require("./data/instruments.data");
var search_service_1 = require("./services/search.service");
var scales_data_1 = require("./data/scales.data");
var chords_data_1 = require("./data/chords.data");
var util_service_1 = require("./services/util.service");
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
    HauptstimmeJs.search = function (searchRequest) {
        return search_service_1.SearchService.getChordsAndScalesByNotes(searchRequest);
    };
    HauptstimmeJs.getFormattedNoteString = function (note, noteArray) {
        if (noteArray === void 0) { noteArray = []; }
        return util_service_1.UtilService.getFormattedNoteString(note, noteArray);
    };
    HauptstimmeJs.addHalfStepsToNote = function (note, halfSteps) {
        return util_service_1.UtilService.addHalfStepsToNote(note, halfSteps);
    };
    HauptstimmeJs.subtractHalfStepsFromNote = function (note, halfSteps) {
        return util_service_1.UtilService.subtractHalfStepsFromNote(note, halfSteps);
    };
    return HauptstimmeJs;
}());
exports.HauptstimmeJs = HauptstimmeJs;
//# sourceMappingURL=hauptstimme.js.map