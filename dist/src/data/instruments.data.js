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
var __1 = require("../..");
var _ = require("lodash");
var InstrumentsData = (function () {
    function InstrumentsData() {
    }
    InstrumentsData.getAvailableInstruments = function () {
        var instruments = [
            {
                name: 'Guitar',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Bass Guitar',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Bass Guitar - 5 String',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Violin',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Violin - Tenor',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Mandolin',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Ukulele - Baritone',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Ukulele - Concert',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Ukulele - Soprano',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B
                ],
                type: 0
            },
            {
                name: 'Ukulele - Tenor',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Cello',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Viola',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Banjo - Plectrum',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Banjo - Tenor (Jazz)',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Banjo - Tenor (Irish)',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Lyre',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.DE,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Bajo Sexto',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.F
                ],
                type: 0
            },
            {
                name: 'Balalaika - Alto',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Balalaika - Soprano',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Cuatro',
                rootNotes: [
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Cuatro - Cubano',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Dulcimer',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.C,
                    __1.NoteConstant.C
                ],
                type: 0
            },
            {
                name: 'Dulcimer (Alternative)',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Mandola',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Sitar',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.F
                ],
                type: 0
            },
            {
                name: 'Solo Bass',
                rootNotes: [
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Dobro',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Guitarron',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Bouzouki',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Bouzouki (Alternative)',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Bouzouki - Irish',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Bouzouki - Irish (Alternative)',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Fiddle',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Vihuela',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Banduria',
                rootNotes: [
                    __1.NoteConstant.GA,
                    __1.NoteConstant.CD,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Charango',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0
            },
            {
                name: 'Oud',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.A,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Oud (Alternative)',
                rootNotes: [
                    __1.NoteConstant.B,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Requinto',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0
            },
            {
                name: 'Lute',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.G
                ],
                type: 0
            },
            {
                name: 'Zither',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C
                ],
                type: 0
            },
            {
                name: 'Guitar - Russian',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 0
            },
            {
                name: 'Pedal Steel Guitar',
                rootNotes: [
                    __1.NoteConstant.B,
                    __1.NoteConstant.D,
                    __1.NoteConstant.E,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.DE,
                    __1.NoteConstant.FG
                ],
                type: 0
            },
            {
                name: 'Pedal Steel Guitar (Alternative)',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.G,
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.D
                ],
                type: 0
            }
        ];
        var tunings = [
            {
                name: 'Major Seconds',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.D,
                    __1.NoteConstant.E,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.G,
                    __1.NoteConstant.AB
                ],
                type: 1
            },
            {
                name: 'Minor Thirds',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.DE,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.DE
                ],
                type: 1
            },
            {
                name: 'Major Thirds',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.C
                ],
                type: 1
            },
            {
                name: 'All Fourths',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.F
                ],
                type: 1
            },
            {
                name: 'Augmented Fourths',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.C,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.C,
                    __1.NoteConstant.FG
                ],
                type: 1
            },
            {
                name: 'All Fifths',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E,
                    __1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Baritone',
                rootNotes: [
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Baritone (Alternative)',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Hawaiian',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.CD,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'New Standard',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E,
                    __1.NoteConstant.G
                ],
                type: 1
            },
            {
                name: 'Resophonic',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Tenor',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Open A',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.CD,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Open B',
                rootNotes: [
                    __1.NoteConstant.B,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B,
                    __1.NoteConstant.DE
                ],
                type: 1
            },
            {
                name: 'Open C',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Open D',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Modal D',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Open D Minor',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Open E',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Open F',
                rootNotes: [
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.C
                ],
                type: 1
            },
            {
                name: 'Open G',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Modal G',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Open G Minor',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.CD,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Admiral',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.C
                ],
                type: 1
            },
            {
                name: 'Buzzard',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.AB,
                    __1.NoteConstant.F
                ],
                type: 1
            },
            {
                name: 'Face',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Four and Twenty',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Hot Type',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Layover',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Magic Farmer',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Pelican',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Processional',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.AB
                ],
                type: 1
            },
            {
                name: 'Slow Motion',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.F,
                    __1.NoteConstant.C,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Spirit',
                rootNotes: [
                    __1.NoteConstant.CD,
                    __1.NoteConstant.A,
                    __1.NoteConstant.CD,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Tarboulton',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.AB,
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.AB,
                    __1.NoteConstant.F
                ],
                type: 1
            },
            {
                name: 'Toulouse',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.C,
                    __1.NoteConstant.D,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Triqueen',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.A,
                    __1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Minor Sixths',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.E,
                    __1.NoteConstant.C,
                    __1.NoteConstant.GA,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Major Sixths',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.A,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.DE,
                    __1.NoteConstant.C,
                    __1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Mandoguitar',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E,
                    __1.NoteConstant.B
                ],
                type: 1
            },
            {
                name: 'Pentatonic',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.C,
                    __1.NoteConstant.D,
                    __1.NoteConstant.E,
                    __1.NoteConstant.G,
                    __1.NoteConstant.A
                ],
                type: 1
            },
            {
                name: 'Overtone',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.G,
                    __1.NoteConstant.AB,
                    __1.NoteConstant.C,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Lefty',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.B,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 1
            },
            {
                name: 'Cittern',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.D
                ],
                type: 1
            },
            {
                name: 'Cittern (Alternative)',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.G
                ],
                type: 1
            },
            {
                name: 'Balalaika',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.E,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
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