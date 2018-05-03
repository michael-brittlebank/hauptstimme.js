"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scales_data_1 = require("../data/scales.data");
const chords_data_1 = require("../data/chords.data");
const filter = require("lodash/filter");
class SearchService {
    static getScalesByNotes(notesArray, rootNote) {
        return new Promise((resolve, reject) => {
            const availableScales = filter(scales_data_1.ScalesData.getAvailableScales(), (scale) => {
                if (typeof rootNote === 'number' && scale.notes[0] !== rootNote) {
                    return false;
                }
                for (let i = 0; i < notesArray.length; i++) {
                    if (scale.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(availableScales);
        });
    }
    static getChordsByNotes(notesArray, rootNote) {
        return new Promise((resolve, reject) => {
            const availableChords = filter(chords_data_1.ChordsData.getAvailableChords(), (chord) => {
                if (typeof rootNote === 'number' && chord.notes[0] !== rootNote) {
                    return false;
                }
                for (let i = 0; i < notesArray.length; i++) {
                    if (chord.notes.indexOf(notesArray[i]) === -1) {
                        return false;
                    }
                }
                return true;
            });
            resolve(availableChords);
        });
    }
    static getChordsAndScalesByNotes(searchRequest) {
        return new Promise((resolve, reject) => {
            return Promise.all([
                this.getChordsByNotes(searchRequest.notes, searchRequest.rootNote),
                this.getScalesByNotes(searchRequest.notes, searchRequest.rootNote)
            ])
                .then((response) => {
                const searchResults = {
                    chords: response[0],
                    scales: response[1]
                };
                resolve(searchResults);
            })
                .catch((error) => {
                console.warn(error);
            });
        });
    }
}
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map