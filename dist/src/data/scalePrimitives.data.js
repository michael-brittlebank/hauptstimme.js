"use strict";
exports.__esModule = true;
var _ = require("lodash");
var note_constant_1 = require("../../constants/note.constant");
var util_service_1 = require("../services/util.service");
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
        var _loop_1 = function (i) {
            rootNote = util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[i]);
            assembledScales = _.map(scalePrimitives, function (scalePrimitive) {
                noteIndex = i;
                scaleNotes = [rootNote];
                _.each(scalePrimitive.steps, function (step) {
                    noteIndex = (noteIndex + parseInt(step, 10)) % noteLength;
                    scaleNotes.push(util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[noteIndex]));
                });
                scaleNotes.splice(-1, 1);
                return {
                    name: [util_service_1.UtilService.getFormattedNoteString(rootNote), scalePrimitive.name].join(' '),
                    notes: scaleNotes,
                    type: scalePrimitive.type
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
                type: 5
            },
            {
                name: 'Dorian',
                steps: ['2', '1', '2', '2', '2', '1', '2'],
                type: 5
            },
            {
                name: 'Phrygian',
                steps: ['1', '2', '2', '2', '1', '2', '2'],
                type: 5
            },
            {
                name: 'Lydian',
                steps: ['2', '2', '2', '1', '2', '2', '1'],
                type: 5
            },
            {
                name: 'Mixolydian',
                steps: ['2', '2', '1', '2', '2', '1', '2'],
                type: 5
            },
            {
                name: 'Minor Aeolian',
                steps: ['2', '1', '2', '2', '1', '2', '2'],
                type: 5
            },
            {
                name: 'Locrian',
                steps: ['1', '2', '2', '1', '2', '2', '2'],
                type: 5
            },
            {
                name: 'Major Pentatonic',
                steps: ['2', '2', '3', '2', '3'],
                type: 5
            },
            {
                name: 'Minor Pentatonic',
                steps: ['3', '2', '2', '3', '2'],
                type: 5
            },
            {
                name: 'Harmonic Minor',
                steps: ['2', '1', '2', '2', '1', '3', '1'],
                type: 5
            },
            {
                name: 'Melodic Minor',
                steps: ['2', '1', '2', '2', '2', '2', '1'],
                type: 5
            },
            {
                name: 'Blues',
                steps: ['3', '2', '1', '1', '3', '2'],
                type: 5
            },
            {
                name: 'Mixo Blues',
                steps: ['2', '1', '1', '1', '1', '1', '2', '1', '2'],
                type: 5
            },
            {
                name: 'Diminished Whole Half',
                steps: ['2', '1', '2', '1', '2', '1', '2', '1'],
                type: 4
            },
            {
                name: 'Diminished Half Whole',
                steps: ['1', '2', '1', '2', '1', '2', '1', '2'],
                type: 4
            },
            {
                name: 'Whole Tone',
                steps: ['2', '2', '2', '2', '2', '2'],
                type: 4
            },
            {
                name: 'Hungarian Minor',
                steps: ['2', '1', '3', '1', '1', '3', '1'],
                type: 4
            },
            {
                name: 'Hungarian Gypsy',
                steps: ['2', '1', '3', '1', '1', '2', '2'],
                type: 4
            },
            {
                name: 'Double Harmonic',
                steps: ['1', '3', '1', '2', '1', '3', '1'],
                type: 4
            },
            {
                name: 'Enigmatic',
                steps: ['1', '3', '2', '2', '2', '1', '1'],
                type: 4
            },
            {
                name: 'Altered',
                steps: ['1', '2', '1', '2', '2', '2', '2'],
                type: 4
            },
            {
                name: 'Major Neapolitan',
                steps: ['1', '2', '2', '2', '2', '2', '1'],
                type: 4
            },
            {
                name: 'Minor Neapolitan',
                steps: ['1', '2', '2', '2', '1', '3', '1'],
                type: 4
            },
            {
                name: 'Persian',
                steps: ['1', '3', '1', '1', '2', '3', '1'],
                type: 4
            },
            {
                name: 'Ukranian Dorian',
                steps: ['2', '1', '3', '1', '2', '1', '2'],
                type: 4
            },
            {
                name: 'Yo',
                steps: ['2', '3', '2', '2', '3'],
                type: 4
            }
        ];
    };
    return ScalePrimitivesData;
}());
exports.ScalePrimitivesData = ScalePrimitivesData;
//# sourceMappingURL=scalePrimitives.data.js.map