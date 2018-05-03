"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_constant_1 = require("../../constants/note.constant");
class UtilService {
    static getLengthOfEnum(enumConstant) {
        return Object.keys(enumConstant).filter(key => typeof enumConstant[key] === 'number').length;
    }
    static getFormattedNoteString(note, noteArray = []) {
        const sharpEntity = '♯';
        const flatEntity = '♭';
        let formattedNote = note_constant_1.NoteConstant[note];
        switch (note) {
            case note_constant_1.NoteConstant.AB:
                if (noteArray.indexOf(note_constant_1.NoteConstant.B) !== -1) {
                    formattedNote = ['A', sharpEntity].join('');
                }
                else {
                    formattedNote = ['B', flatEntity].join('');
                }
                break;
            case note_constant_1.NoteConstant.CD:
                if (noteArray.indexOf(note_constant_1.NoteConstant.C) !== -1) {
                    formattedNote = ['D', flatEntity].join('');
                }
                else {
                    formattedNote = ['C', sharpEntity].join('');
                }
                break;
            case note_constant_1.NoteConstant.DE:
                if (noteArray.indexOf(note_constant_1.NoteConstant.E) !== -1) {
                    formattedNote = ['D', sharpEntity].join('');
                }
                else {
                    formattedNote = ['E', flatEntity].join('');
                }
                break;
            case note_constant_1.NoteConstant.FG:
                if (noteArray.indexOf(note_constant_1.NoteConstant.F) !== -1) {
                    formattedNote = ['G', flatEntity].join('');
                }
                else {
                    formattedNote = ['F', sharpEntity].join('');
                }
                break;
            case note_constant_1.NoteConstant.GA:
                if (noteArray.indexOf(note_constant_1.NoteConstant.A) !== -1) {
                    formattedNote = ['G', sharpEntity].join('');
                }
                else {
                    formattedNote = ['A', flatEntity].join('');
                }
                break;
        }
        return formattedNote;
    }
    static getEnumFromStringKey(enumConstant, key) {
        return parseInt(enumConstant[key]);
    }
    static modulo(integer, modulus) {
        return ((integer % modulus) + modulus) % modulus;
    }
    ;
    static addHalfStepsToNote(note, halfSteps) {
        const noteLength = UtilService.getLengthOfEnum(note_constant_1.NoteConstant);
        return UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[UtilService.modulo(note + halfSteps, noteLength)]);
    }
    static subtractHalfStepsFromNote(note, halfSteps) {
        const noteLength = UtilService.getLengthOfEnum(note_constant_1.NoteConstant);
        return UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[UtilService.modulo(note - halfSteps, noteLength)]);
    }
}
exports.UtilService = UtilService;
//# sourceMappingURL=util.service.js.map