"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter = require("lodash/filter");
var SearchService = (function () {
    function SearchService() {
    }
    SearchService.getScalesByNotes = function (availableScales, notesArray, rootNote) {
        return new Promise(function (resolve, reject) {
            var filteredScales = filter(availableScales, function (scale) {
                if (typeof rootNote === 'number' && scale.notes[0] !== rootNote) {
                    return false;
                }
                for (var i = 0; i < notesArray.length; i++) {
                    if (scale.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(filteredScales);
        });
    };
    SearchService.getChordsByNotes = function (availableChords, notesArray, rootNote) {
        return new Promise(function (resolve, reject) {
            var filteredChords = filter(availableChords, function (chord) {
                if (typeof rootNote === 'number' && chord.notes[0] !== rootNote) {
                    return false;
                }
                for (var i = 0; i < notesArray.length; i++) {
                    if (chord.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(filteredChords);
        });
    };
    SearchService.getChordsAndScalesByNotes = function (searchRequest, availableScales, availableChords) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return Promise.all([
                _this.getChordsByNotes(availableChords, searchRequest.notes, searchRequest.rootNote),
                _this.getScalesByNotes(availableScales, searchRequest.notes, searchRequest.rootNote)
            ])
                .then(function (response) {
                var searchResults = {
                    chords: response[0],
                    scales: response[1]
                };
                resolve(searchResults);
            })
                .catch(function (error) {
                console.warn(error);
            });
        });
    };
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map