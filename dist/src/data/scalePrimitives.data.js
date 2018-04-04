"use strict";
exports.__esModule = true;
var _ = require("lodash");
var __1 = require("../..");
var util_service_1 = require("../services/util.service");
var ScalePrimitivesData = /** @class */ (function () {
    function ScalePrimitivesData() {
    }
    ScalePrimitivesData.compileScalePrimitivesIntoScales = function () {
        var scalePrimitives = this.getAvailableScalePrimitives();
        var noteLength = util_service_1.UtilService.getLengthOfEnum(__1.NoteConstant);
        var scales = [];
        var scaleNotes;
        var assembledScales = [];
        var rootNote;
        var noteIndex;
        var _loop_1 = function (i) {
            rootNote = util_service_1.UtilService.getEnumFromStringKey(__1.NoteConstant, __1.NoteConstant[i]);
            // compile each scale for the given root note
            assembledScales = _.map(scalePrimitives, function (scalePrimitive) {
                noteIndex = i;
                scaleNotes = [rootNote];
                // use the steps to determine the correct note sequence
                _.each(scalePrimitive.steps, function (step) {
                    noteIndex = (noteIndex + parseInt(step, 10)) % noteLength;
                    scaleNotes.push(util_service_1.UtilService.getEnumFromStringKey(__1.NoteConstant, __1.NoteConstant[noteIndex]));
                });
                // remove last element in array as it is the same as the first (root) note
                scaleNotes.splice(-1, 1);
                return {
                    name: [util_service_1.UtilService.getFormattedNoteString(rootNote), scalePrimitive.name].join(' '),
                    notes: scaleNotes,
                    type: scalePrimitive.type
                };
            });
            scales = scales.concat(assembledScales);
        };
        // loop through each possible root note
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
                type: 5 /* MAIN */
            },
            {
                name: 'Dorian',
                steps: ['2', '1', '2', '2', '2', '1', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Phrygian',
                steps: ['1', '2', '2', '2', '1', '2', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Lydian',
                steps: ['2', '2', '2', '1', '2', '2', '1'],
                type: 5 /* MAIN */
            },
            {
                name: 'Mixolydian',
                steps: ['2', '2', '1', '2', '2', '1', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Minor Aeolian',
                steps: ['2', '1', '2', '2', '1', '2', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Locrian',
                steps: ['1', '2', '2', '1', '2', '2', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Major Pentatonic',
                steps: ['2', '2', '3', '2', '3'],
                type: 5 /* MAIN */
            },
            {
                name: 'Minor Pentatonic',
                steps: ['3', '2', '2', '3', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Harmonic Minor',
                steps: ['2', '1', '2', '2', '1', '3', '1'],
                type: 5 /* MAIN */
            },
            {
                name: 'Melodic Minor',
                steps: ['2', '1', '2', '2', '2', '2', '1'],
                type: 5 /* MAIN */
            },
            {
                name: 'Blues',
                steps: ['3', '2', '1', '1', '3', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Mixo Blues',
                steps: ['2', '1', '1', '1', '1', '1', '2', '1', '2'],
                type: 5 /* MAIN */
            },
            {
                name: 'Diminished Whole Half',
                steps: ['2', '1', '2', '1', '2', '1', '2', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Diminished Half Whole',
                steps: ['1', '2', '1', '2', '1', '2', '1', '2'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Whole Tone',
                steps: ['2', '2', '2', '2', '2', '2'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Hungarian Minor',
                steps: ['2', '1', '3', '1', '1', '3', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Hungarian Gypsy',
                steps: ['2', '1', '3', '1', '1', '2', '2'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Double Harmonic',
                steps: ['1', '3', '1', '2', '1', '3', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Enigmatic',
                steps: ['1', '3', '2', '2', '2', '1', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Altered',
                steps: ['1', '2', '1', '2', '2', '2', '2'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Major Neapolitan',
                steps: ['1', '2', '2', '2', '2', '2', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Minor Neapolitan',
                steps: ['1', '2', '2', '2', '1', '3', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Persian',
                steps: ['1', '3', '1', '1', '2', '3', '1'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Ukranian Dorian',
                steps: ['2', '1', '3', '1', '2', '1', '2'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Yo',
                steps: ['2', '3', '2', '2', '3'],
                type: 4 /* MISCELLANEOUS */
            }
        ];
    };
    return ScalePrimitivesData;
}());
exports.ScalePrimitivesData = ScalePrimitivesData;
