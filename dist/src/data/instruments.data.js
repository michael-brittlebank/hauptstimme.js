"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var note_constant_1 = require("../../constants/note.constant");
var _ = require("lodash");
var InstrumentsData = (function () {
    function InstrumentsData() {
    }
    InstrumentsData.getAvailableInstruments = function () {
        var instruments = [
            {
                name: 'Guitar',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Bass Guitar',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Bass Guitar - 5 String',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Violin',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Violin - Tenor',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Mandolin',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Ukulele - Baritone',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Ukulele - Concert',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Ukulele - Soprano',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B
                ],
                type: 0
            },
            {
                name: 'Ukulele - Tenor',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Cello',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Viola',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Banjo - Plectrum',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Banjo - Tenor (Jazz)',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Banjo - Tenor (Irish)',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Lyre',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Bajo Sexto',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.F
                ],
                type: 0
            },
            {
                name: 'Balalaika - Alto',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Balalaika - Soprano',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Cuatro',
                rootNotes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Cuatro - Cubano',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Dulcimer',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C
                ],
                type: 0
            },
            {
                name: 'Dulcimer (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Mandola',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Sitar',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F
                ],
                type: 0
            },
            {
                name: 'Solo Bass',
                rootNotes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Dobro',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Guitarron',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Bouzouki',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Bouzouki (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Bouzouki - Irish',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Bouzouki - Irish (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Fiddle',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Vihuela',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Banduria',
                rootNotes: [
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Charango',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Oud',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Oud (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Requinto',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Lute',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Zither',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C
                ],
                type: 0
            },
            {
                name: 'Guitar - Russian',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Pedal Steel Guitar',
                rootNotes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG
                ],
                type: 0
            },
            {
                name: 'Pedal Steel Guitar (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.D
                ],
                type: 0
            }
        ];
        var tunings = [
            {
                name: 'Major Seconds',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB
                ],
                type: 1
            },
            {
                name: 'Minor Thirds',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.DE
                ],
                type: 1
            },
            {
                name: 'Major Thirds',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.C
                ],
                type: 1
            },
            {
                name: 'All Fourths',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F
                ],
                type: 1
            },
            {
                name: 'Augmented Fourths',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.FG
                ],
                type: 1
            },
            {
                name: 'All Fifths',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Baritone',
                rootNotes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Baritone (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Hawaiian',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'New Standard',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G
                ],
                type: 1
            },
            {
                name: 'Resophonic',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Tenor',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Open A',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Open B',
                rootNotes: [
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.DE
                ],
                type: 1
            },
            {
                name: 'Open C',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Open D',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Modal D',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Open D Minor',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Open E',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Open F',
                rootNotes: [
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C
                ],
                type: 1
            },
            {
                name: 'Open G',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Modal G',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Open G Minor',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Admiral',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.C
                ],
                type: 1
            },
            {
                name: 'Buzzard',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.F
                ],
                type: 1
            },
            {
                name: 'Face',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Four and Twenty',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Hot Type',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Layover',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Magic Farmer',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Pelican',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Processional',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB
                ],
                type: 1
            },
            {
                name: 'Slow Motion',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Spirit',
                rootNotes: [
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Tarboulton',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.F
                ],
                type: 1
            },
            {
                name: 'Toulouse',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Triqueen',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Minor Sixths',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Major Sixths',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Mandoguitar',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Pentatonic',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Overtone',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Lefty',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Cittern',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Cittern (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G
                ],
                type: 1
            },
            {
                name: 'Balalaika',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: 1
            }
        ];
        return _.sortBy(_.map(_.union(instruments, tunings), function (instrument, index) {
            return __assign({}, instrument, { id: (index + 1) });
        }), 'name');
    };
    return InstrumentsData;
}());
exports.InstrumentsData = InstrumentsData;
//# sourceMappingURL=instruments.data.js.map