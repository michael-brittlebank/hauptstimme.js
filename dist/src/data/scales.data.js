"use strict";
exports.__esModule = true;
var note_constant_1 = require("../../constants/note.constant");
var ScalesData = /** @class */ (function () {
    function ScalesData() {
    }
    ScalesData.getAvailableScales = function () {
        // do not directly modify. this data is compiled from the primitives array for ease of use/searching
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Dorian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Lydian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Locrian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Blues',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixo Blues',
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
                type: 5 /* MAIN */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Whole Half',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Half Whole',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Altered',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Persian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Yo',
                notes: [
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Dorian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Lydian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Locrian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Blues',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixo Blues',
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
                type: 5 /* MAIN */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Whole Half',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Half Whole',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Altered',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Persian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Yo',
                notes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB
                ],
                type: 4 /* MISCELLANEOUS */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Dorian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Lydian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Locrian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Blues',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixo Blues',
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
                type: 5 /* MAIN */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Whole Half',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Half Whole',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Altered',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Persian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Yo',
                notes: [
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C
                ],
                type: 4 /* MISCELLANEOUS */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Dorian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Lydian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Locrian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Blues',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixo Blues',
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
                type: 5 /* MAIN */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Whole Half',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Half Whole',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Altered',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Persian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Yo',
                notes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE
                ],
                type: 4 /* MISCELLANEOUS */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 5 /* MAIN */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Ionian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Dorian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Phrygian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Lydian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixolydian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Aeolian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Locrian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Pentatonic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Harmonic Minor',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Melodic Minor',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Blues',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixo Blues',
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
                type: 5 /* MAIN */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Whole Half',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Half Whole',
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
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Whole Tone',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Minor',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Gypsy',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Double Harmonic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Enigmatic',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Altered',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Neapolitan',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Persian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Ukranian Dorian',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG
                ],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Yo',
                notes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.F
                ],
                type: 4 /* MISCELLANEOUS */
            }
        ];
    };
    return ScalesData;
}());
exports.ScalesData = ScalesData;
