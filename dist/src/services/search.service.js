"use strict";
exports.__esModule = true;
var _1 = require("../../");
var _ = require("lodash");
var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.getScalesByNotes = function (notesArray) {
        var availableScales = _1.ScalesData.getAvailableScales();
        return _.filter(availableScales, function (scale) {
            for (var i = 0; i < notesArray.length; i++) {
                if (scale.notes.indexOf(notesArray[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    };
    SearchService.getChordsByNotes = function (notesArray) {
        var availableChords = _1.ChordsData.getAvailableChords();
        return _.filter(availableChords, function (chord) {
            for (var i = 0; i < notesArray.length; i++) {
                if (chord.notes.indexOf(notesArray[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    };
    SearchService.getChordsAndScalesByNotes = function (notesArray) {
        var availableChords = this.getChordsByNotes(notesArray);
        var availableScales = this.getScalesByNotes(notesArray);
        return {
            chords: availableChords,
            scales: availableScales
        };
    };
    return SearchService;
}());
exports.SearchService = SearchService;
