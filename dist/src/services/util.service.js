"use strict";
exports.__esModule = true;
var note_constant_1 = require("../../constants/note.constant");
var UtilService = (function () {
    function UtilService() {
    }
    UtilService.getLengthOfEnum = function (enumConstant) {
        return Object.keys(enumConstant).filter(function (key) { return typeof enumConstant[key] === 'number'; }).length;
    };
    UtilService.getFormattedNoteString = function (note) {
        var sharpEntity = '&#9839;';
        var flatEntity = '&#9837;';
        var formattedNote = note_constant_1.NoteConstant[note];
        switch (note) {
            case note_constant_1.NoteConstant.AB:
                formattedNote = ['B', flatEntity].join('');
                break;
            case note_constant_1.NoteConstant.CD:
                formattedNote = ['C', sharpEntity].join('');
                break;
            case note_constant_1.NoteConstant.DE:
                formattedNote = ['E', flatEntity].join('');
                break;
            case note_constant_1.NoteConstant.FG:
                formattedNote = ['F', sharpEntity].join('');
                break;
            case note_constant_1.NoteConstant.GA:
                formattedNote = ['A', flatEntity].join('');
                break;
        }
        return formattedNote;
    };
    UtilService.getEnumFromStringKey = function (enumConstant, key) {
        return parseInt(enumConstant[key]);
    };
    return UtilService;
}());
exports.UtilService = UtilService;
//# sourceMappingURL=util.service.js.map