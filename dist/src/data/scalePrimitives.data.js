"use strict";
exports.__esModule = true;
var chordOrScaleType_constant_1 = require("../../constants/chordOrScaleType.constant");
var ScalePrimitivesData = /** @class */ (function () {
    function ScalePrimitivesData() {
    }
    ScalePrimitivesData.getAvailableChordPrimitives = function () {
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
