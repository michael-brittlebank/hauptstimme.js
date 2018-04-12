"use strict";
exports.__esModule = true;
var note_constant_1 = require("../../constants/note.constant");
var ScalesData = (function () {
    function ScalesData() {
    }
    ScalesData.getAvailableScales = function () {
        return [
            {
                name: 'A Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'A Dorian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Phrygian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Lydian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'A Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Locrian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'A Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'A Blues',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Altered',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Persian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'A Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A Yo',
                notes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'B&#9837; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B&#9837; Dorian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Lydian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B&#9837; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Locrian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'B&#9837; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B&#9837; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B&#9837; Blues',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B&#9837; Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'B&#9837; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'B&#9837; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'B&#9837; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Altered',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'B&#9837; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Persian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B&#9837; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'B&#9837; Yo',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'B Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'B Dorian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Phrygian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Lydian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'B Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Locrian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5
            },
            {
                name: 'B Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'B Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'B Blues',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'B Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Altered',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Persian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'B Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'B Yo',
                notes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4
            },
            {
                name: 'C Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C Dorian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Phrygian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Lydian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Locrian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5
            },
            {
                name: 'C Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C Blues',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'C Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'C Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'C Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Altered',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'C Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Persian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'C Yo',
                notes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4
            },
            {
                name: 'C&#9839; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'C&#9839; Dorian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Lydian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'C&#9839; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Locrian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5
            },
            {
                name: 'C&#9839; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'C&#9839; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'C&#9839; Blues',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'C&#9839; Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C&#9839; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C&#9839; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C&#9839; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Altered',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C&#9839; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Persian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'C&#9839; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'C&#9839; Yo',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4
            },
            {
                name: 'D Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'D Dorian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Phrygian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Lydian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'D Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Locrian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5
            },
            {
                name: 'D Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'D Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'D Blues',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'D Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'D Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'D Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'D Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Altered',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'D Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Persian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'D Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'D Yo',
                notes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4
            },
            {
                name: 'E&#9837; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E&#9837; Dorian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Lydian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E&#9837; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Locrian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5
            },
            {
                name: 'E&#9837; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E&#9837; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E&#9837; Blues',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E&#9837; Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'E&#9837; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'E&#9837; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'E&#9837; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Altered',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'E&#9837; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Persian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E&#9837; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'E&#9837; Yo',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4
            },
            {
                name: 'E Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'E Dorian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Phrygian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Lydian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'E Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Locrian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5
            },
            {
                name: 'E Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'E Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'E Blues',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'E Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Altered',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Persian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'E Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'E Yo',
                notes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4
            },
            {
                name: 'F Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F Dorian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Phrygian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Lydian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Locrian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5
            },
            {
                name: 'F Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F Blues',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'F Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'F Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'F Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Altered',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'F Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Persian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'F Yo',
                notes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4
            },
            {
                name: 'F&#9839; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'F&#9839; Dorian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Lydian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'F&#9839; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Locrian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5
            },
            {
                name: 'F&#9839; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'F&#9839; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'F&#9839; Blues',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'F&#9839; Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F&#9839; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F&#9839; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F&#9839; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Altered',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F&#9839; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Persian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'F&#9839; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'F&#9839; Yo',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4
            },
            {
                name: 'G Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'G Dorian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Phrygian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Lydian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'G Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Locrian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5
            },
            {
                name: 'G Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'G Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'G Blues',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'G Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'G Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'G Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'G Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Altered',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'G Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Persian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'G Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            },
            {
                name: 'G Yo',
                notes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4
            },
            {
                name: 'A&#9837; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A&#9837; Dorian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Lydian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A&#9837; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Locrian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5
            },
            {
                name: 'A&#9837; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A&#9837; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5
            },
            {
                name: 'A&#9837; Blues',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Mixo Blues',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5
            },
            {
                name: 'A&#9837; Diminished Whole Half',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Diminished Half Whole',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'A&#9837; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'A&#9837; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'A&#9837; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Altered',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'A&#9837; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Persian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4
            },
            {
                name: 'A&#9837; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4
            },
            {
                name: 'A&#9837; Yo',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4
            }
        ];
    };
    return ScalesData;
}());
exports.ScalesData = ScalesData;
//# sourceMappingURL=scales.data.js.map