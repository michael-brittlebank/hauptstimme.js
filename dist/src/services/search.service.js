"use strict";
exports.__esModule = true;
var scales_data_1 = require("../data/scales.data");
var _ = require("lodash");
var Promise = require("bluebird");
var chords_data_1 = require("../data/chords.data");
var SearchService = (function () {
    function SearchService() {
    }
    SearchService.getScalesByNotes = function (notesArray) {
        return new Promise(function (resolve, reject) {
            var availableScales = _.filter(scales_data_1.ScalesData.getAvailableScales(), function (scale) {
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
            var availableChords = _.filter(chords_data_1.ChordsData.getAvailableChords(), function (chord) {
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
//# sourceMappingURL=search.service.js.map