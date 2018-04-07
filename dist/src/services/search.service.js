"use strict";
exports.__esModule = true;
var _1 = require("../../");
var _ = require("lodash");
var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.getScalesByNotes = function (notesArray) {
        return new Promise(function (resolve, reject) {
            var availableScales = _.filter(_1.ScalesData.getAvailableScales(), function (scale) {
                for (var i = 0; i < notesArray.length; i++) {
                    if (scale.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(availableScales);
        });
    };
    SearchService.getChordsByNotes = function (notesArray) {
        return new Promise(function (resolve, reject) {
            var availableChords = _.filter(_1.ChordsData.getAvailableChords(), function (chord) {
                for (var i = 0; i < notesArray.length; i++) {
                    if (chord.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(availableChords);
        });
    };
    SearchService.getChordsAndScalesByNotes = function (notesArray) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return Promise.all([
                _this.getChordsByNotes(notesArray),
                _this.getScalesByNotes(notesArray)
            ])
                .then(function (response) {
                var searchResults = {
                    chords: response[0],
                    scales: response[1]
                };
                resolve(searchResults);
            });
        });
    };
    return SearchService;
}());
exports.SearchService = SearchService;
