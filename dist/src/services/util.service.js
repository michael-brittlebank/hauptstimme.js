"use strict";
exports.__esModule = true;
var _1 = require("../../");
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.getLengthOfEnum = function (enumConstant) {
        return Object.keys(enumConstant).filter(function (key) { return typeof enumConstant[key] === 'number'; }).length;
    };
    UtilService.getFormattedNoteString = function (note) {
        var sharpEntity = '&#9839;';
        var flatEntity = '&#9837;';
        var formattedNote = _1.NoteConstant[note];
        switch (note) {
            case _1.NoteConstant.AB:
                // b flat
                formattedNote = ['B', flatEntity].join('');
                break;
            case _1.NoteConstant.CD:
                // c sharp
                formattedNote = ['C', sharpEntity].join('');
                break;
            case _1.NoteConstant.DE:
                // e flat
                formattedNote = ['E', flatEntity].join('');
                break;
            case _1.NoteConstant.FG:
                // f sharp
                formattedNote = ['F', sharpEntity].join('');
                break;
            case _1.NoteConstant.GA:
                // a flat
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
