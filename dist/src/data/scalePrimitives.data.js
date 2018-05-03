"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chordOrScaleType_constant_1 = require("../../constants/chordOrScaleType.constant");
var note_constant_1 = require("../../constants/note.constant");
var util_service_1 = require("../services/util.service");
var map = require("lodash/map");
var each = require("lodash/each");
var ScalePrimitivesData = (function () {
    function ScalePrimitivesData() {
    }
    ScalePrimitivesData.compileScalePrimitivesIntoScales = function () {
        var scalePrimitives = this.getAvailableScalePrimitives();
        var noteLength = util_service_1.UtilService.getLengthOfEnum(note_constant_1.NoteConstant);
        var scales = [];
        var scaleNotes;
        var assembledScales = [];
        var rootNote;
        var noteIndex;
        var scaleDescription = [];
        var _loop_1 = function (i) {
            rootNote = util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[i]);
            assembledScales = map(scalePrimitives, function (scalePrimitive) {
                noteIndex = i;
                scaleNotes = [rootNote];
                scaleDescription = [util_service_1.UtilService.getFormattedNoteString(util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[rootNote]))];
                each(scalePrimitive.steps, function (step) {
                    noteIndex = (noteIndex + parseInt(step, 10)) % noteLength;
                    scaleNotes.push(util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[noteIndex]));
                    scaleDescription.push(util_service_1.UtilService.getFormattedNoteString(util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[noteIndex])));
                });
                scaleNotes.splice(-1, 1);
                scaleDescription.splice(-1, 1);
                return {
                    name: [util_service_1.UtilService.getFormattedNoteString(rootNote), scalePrimitive.name].join(' '),
                    notes: scaleNotes,
                    type: scalePrimitive.type,
                    description: scaleDescription.join(', ')
                };
            });
            scales = scales.concat(assembledScales);
        };
        for (var i = 0; i < noteLength; i++) {
            _loop_1(i);
        }
        return scales;
    };
    ScalePrimitivesData.getAvailableScalePrimitives = function () {
        return [
            {
                name: 'Major Ionian',
                steps: ['2', '2', '1', '2', '2', '2', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Dorian',
                steps: ['2', '1', '2', '2', '2', '1', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Phrygian',
                steps: ['1', '2', '2', '2', '1', '2', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Lydian',
                steps: ['2', '2', '2', '1', '2', '2', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Mixolydian',
                steps: ['2', '2', '1', '2', '2', '1', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Minor Aeolian',
                steps: ['2', '1', '2', '2', '1', '2', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Locrian',
                steps: ['1', '2', '2', '1', '2', '2', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Major Pentatonic',
                steps: ['2', '2', '3', '2', '3'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Minor Pentatonic',
                steps: ['3', '2', '2', '3', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Harmonic Minor',
                steps: ['2', '1', '2', '2', '1', '3', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Melodic Minor',
                steps: ['2', '1', '2', '2', '2', '2', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Blues',
                steps: ['3', '2', '1', '1', '3', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Mixo Blues',
                steps: ['2', '1', '1', '1', '1', '1', '2', '1', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'Diminished Whole Half',
                steps: ['2', '1', '2', '1', '2', '1', '2', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Diminished Half Whole',
                steps: ['1', '2', '1', '2', '1', '2', '1', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Whole Tone',
                steps: ['2', '2', '2', '2', '2', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Hungarian Minor',
                steps: ['2', '1', '3', '1', '1', '3', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Hungarian Gypsy',
                steps: ['2', '1', '3', '1', '1', '2', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Double Harmonic',
                steps: ['1', '3', '1', '2', '1', '3', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Enigmatic',
                steps: ['1', '3', '2', '2', '2', '1', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Altered',
                steps: ['1', '2', '1', '2', '2', '2', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Major Neapolitan',
                steps: ['1', '2', '2', '2', '2', '2', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Minor Neapolitan',
                steps: ['1', '2', '2', '2', '1', '3', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Persian',
                steps: ['1', '3', '1', '1', '2', '3', '1'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Ukranian Dorian',
                steps: ['2', '1', '3', '1', '2', '1', '2'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Yo',
                steps: ['2', '3', '2', '2', '3'],
                type: chordOrScaleType_constant_1.ChordOrScaleTypeConstant.MISCELLANEOUS
            }
        ];
    };
    return ScalePrimitivesData;
}());
exports.ScalePrimitivesData = ScalePrimitivesData;
//# sourceMappingURL=scalePrimitives.data.js.map