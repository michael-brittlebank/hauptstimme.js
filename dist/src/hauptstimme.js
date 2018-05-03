"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instruments_data_1 = require("./data/instruments.data");
const search_service_1 = require("./services/search.service");
const scales_data_1 = require("./data/scales.data");
const chords_data_1 = require("./data/chords.data");
const util_service_1 = require("./services/util.service");
class HauptstimmeJs {
    static getAvailableInstruments() {
        return new Promise((resolve, reject) => {
            resolve(instruments_data_1.InstrumentsData.getAvailableInstruments());
        });
    }
    static getAvailableScales() {
        return new Promise((resolve, reject) => {
            resolve(scales_data_1.ScalesData.getAvailableScales());
        });
    }
    static getAvailableChords() {
        return new Promise((resolve, reject) => {
            resolve(chords_data_1.ChordsData.getAvailableChords());
        });
    }
    static search(searchRequest) {
        return search_service_1.SearchService.getChordsAndScalesByNotes(searchRequest);
    }
    static getFormattedNoteString(note, noteArray = []) {
        return util_service_1.UtilService.getFormattedNoteString(note, noteArray);
    }
    static addHalfStepsToNote(note, halfSteps) {
        return util_service_1.UtilService.addHalfStepsToNote(note, halfSteps);
    }
    static subtractHalfStepsFromNote(note, halfSteps) {
        return util_service_1.UtilService.subtractHalfStepsFromNote(note, halfSteps);
    }
}
exports.HauptstimmeJs = HauptstimmeJs;
//# sourceMappingURL=hauptstimme.js.map