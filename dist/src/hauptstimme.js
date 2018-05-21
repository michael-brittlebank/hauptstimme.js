"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instruments_data_1 = require("./data/instruments.data");
var search_service_1 = require("./services/search.service");
var util_service_1 = require("./services/util.service");
var chordPrimitives_data_1 = require("./data/chordPrimitives.data");
var scalePrimitives_data_1 = require("./data/scalePrimitives.data");
var HauptstimmeJs = (function () {
    function HauptstimmeJs() {
        this.availableScales = [];
        this.availableChords = [];
        this.availableInstruments = [];
        this.availableScales = scalePrimitives_data_1.ScalePrimitivesData.compileScalePrimitivesIntoScales();
        this.availableChords = chordPrimitives_data_1.ChordPrimitivesData.compileChordPrimitivesIntoChords(this.availableScales);
        this.availableInstruments = instruments_data_1.InstrumentsData.getAvailableInstruments();
    }
    HauptstimmeJs.prototype.getAvailableInstruments = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.availableInstruments);
        });
    };
    HauptstimmeJs.prototype.getAvailableScales = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.availableScales);
        });
    };
    HauptstimmeJs.prototype.getAvailableChords = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.availableChords);
        });
    };
    HauptstimmeJs.prototype.search = function (searchRequest) {
        return search_service_1.SearchService.getChordsAndScalesByNotes(searchRequest, this.availableScales, this.availableChords);
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