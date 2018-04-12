"use strict";
exports.__esModule = true;
var _1 = require("../../");
var ScalesData = (function () {
    function ScalesData() {
    }
    ScalesData.getAvailableScales = function () {
        return [
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 5
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
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
                type: 4
            }
        ];
    };
    return ScalesData;
}());
exports.ScalesData = ScalesData;
//# sourceMappingURL=scales.data.js.map