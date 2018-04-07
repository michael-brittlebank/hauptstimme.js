"use strict";
exports.__esModule = true;
var _1 = require("../../");
var ScalesData = /** @class */ (function () {
    function ScalesData() {
    }
    ScalesData.getAvailableScales = function () {
        return new Promise(function (resolve, reject) {
            // do not directly modify. this data is compiled from the primitives array for ease of use/searching
            var availableScales = [
                {
                    name: 'A Major Ionian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Dorian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Phrygian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Lydian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Mixolydian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Minor Aeolian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Locrian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Major Pentatonic',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Harmonic Minor',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Melodic Minor',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Blues',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Mixo Blues',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Whole Tone',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Hungarian Minor',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Double Harmonic',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Enigmatic',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Altered',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Major Neapolitan',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Persian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A Yo',
                    notes: [
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Major Ionian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Dorian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Phrygian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Lydian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Mixolydian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Minor Aeolian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Locrian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Major Pentatonic',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Harmonic Minor',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Melodic Minor',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Blues',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Mixo Blues',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B&#9837; Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Whole Tone',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Hungarian Minor',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Double Harmonic',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Enigmatic',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Altered',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Major Neapolitan',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Persian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B&#9837; Yo',
                    notes: [
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Major Ionian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Dorian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Phrygian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Lydian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Mixolydian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Minor Aeolian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Locrian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Major Pentatonic',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Harmonic Minor',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Melodic Minor',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Blues',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Mixo Blues',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'B Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Whole Tone',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Hungarian Minor',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Double Harmonic',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Enigmatic',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Altered',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Major Neapolitan',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Persian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'B Yo',
                    notes: [
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Major Ionian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Dorian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Phrygian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Lydian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Mixolydian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Minor Aeolian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Locrian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Major Pentatonic',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Harmonic Minor',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Melodic Minor',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Blues',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Mixo Blues',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Whole Tone',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Hungarian Minor',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Double Harmonic',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Enigmatic',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Altered',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Major Neapolitan',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Persian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C Yo',
                    notes: [
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Major Ionian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Dorian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Phrygian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Lydian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Mixolydian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Minor Aeolian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Locrian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Major Pentatonic',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Harmonic Minor',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Melodic Minor',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Blues',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Mixo Blues',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'C&#9839; Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Whole Tone',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Hungarian Minor',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Double Harmonic',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Enigmatic',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Altered',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Major Neapolitan',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Persian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'C&#9839; Yo',
                    notes: [
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Major Ionian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Dorian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Phrygian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Lydian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Mixolydian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Minor Aeolian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Locrian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Major Pentatonic',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Harmonic Minor',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Melodic Minor',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Blues',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Mixo Blues',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'D Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Whole Tone',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Hungarian Minor',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Double Harmonic',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Enigmatic',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Altered',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Major Neapolitan',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Persian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'D Yo',
                    notes: [
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Major Ionian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Dorian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Phrygian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Lydian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Mixolydian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Minor Aeolian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Locrian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Major Pentatonic',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Harmonic Minor',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Melodic Minor',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Blues',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Mixo Blues',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E&#9837; Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Whole Tone',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Hungarian Minor',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Double Harmonic',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Enigmatic',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Altered',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Major Neapolitan',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Persian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E&#9837; Yo',
                    notes: [
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Major Ionian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Dorian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Phrygian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Lydian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Mixolydian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Minor Aeolian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Locrian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Major Pentatonic',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Harmonic Minor',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Melodic Minor',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Blues',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Mixo Blues',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'E Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Whole Tone',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Hungarian Minor',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Double Harmonic',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Enigmatic',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Altered',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Major Neapolitan',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Persian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'E Yo',
                    notes: [
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Major Ionian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Dorian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Phrygian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Lydian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Mixolydian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Minor Aeolian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Locrian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Major Pentatonic',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Harmonic Minor',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Melodic Minor',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Blues',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Mixo Blues',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Whole Tone',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Hungarian Minor',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Double Harmonic',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Enigmatic',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Altered',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Major Neapolitan',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Persian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F Yo',
                    notes: [
                        _1.NoteConstant.F,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Major Ionian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Dorian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Phrygian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Lydian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Mixolydian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Minor Aeolian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Locrian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Major Pentatonic',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Harmonic Minor',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Melodic Minor',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Blues',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Mixo Blues',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'F&#9839; Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Whole Tone',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Hungarian Minor',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Double Harmonic',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Enigmatic',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Altered',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Major Neapolitan',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Persian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'F&#9839; Yo',
                    notes: [
                        _1.NoteConstant.FG,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Major Ionian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Dorian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Phrygian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Lydian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Mixolydian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Minor Aeolian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Locrian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Major Pentatonic',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Harmonic Minor',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Melodic Minor',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Blues',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Mixo Blues',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'G Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Whole Tone',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Hungarian Minor',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Double Harmonic',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Enigmatic',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Altered',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Major Neapolitan',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Persian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'G Yo',
                    notes: [
                        _1.NoteConstant.G,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Major Ionian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Dorian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Phrygian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Lydian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Mixolydian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Minor Aeolian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Locrian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Major Pentatonic',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Minor Pentatonic',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Harmonic Minor',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Melodic Minor',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Blues',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Mixo Blues',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG
                    ],
                    type: 5 /* MAIN */
                },
                {
                    name: 'A&#9837; Diminished Whole Half',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Diminished Half Whole',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Whole Tone',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Hungarian Minor',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Hungarian Gypsy',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Double Harmonic',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Enigmatic',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Altered',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.C,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Major Neapolitan',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Minor Neapolitan',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.B,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Persian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.A,
                        _1.NoteConstant.C,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.D,
                        _1.NoteConstant.E,
                        _1.NoteConstant.G
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Ukranian Dorian',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.B,
                        _1.NoteConstant.D,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F,
                        _1.NoteConstant.FG
                    ],
                    type: 4 /* MISCELLANEOUS */
                },
                {
                    name: 'A&#9837; Yo',
                    notes: [
                        _1.NoteConstant.GA,
                        _1.NoteConstant.AB,
                        _1.NoteConstant.CD,
                        _1.NoteConstant.DE,
                        _1.NoteConstant.F
                    ],
                    type: 4 /* MISCELLANEOUS */
                }
            ];
            resolve(availableScales);
        });
    };
    return ScalesData;
}());
exports.ScalesData = ScalesData;
