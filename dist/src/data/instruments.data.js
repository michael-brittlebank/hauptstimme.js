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
var InstrumentsData = /** @class */ (function () {
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
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Bass Guitar',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Bass Guitar - 5 String',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.G
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Violin',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Violin - Tenor',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Mandolin',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Ukulele - Baritone',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Ukulele - Concert',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Ukulele - Soprano',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.D,
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Ukulele - Tenor',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Cello',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Viola',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Banjo - Plectrum',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.B,
                    __1.NoteConstant.D
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Banjo - Tenor (Jazz)',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Banjo - Tenor (Irish)',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Balalaika - Alto',
                rootNotes: [
                    __1.NoteConstant.A,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Balalaika - Soprano',
                rootNotes: [
                    __1.NoteConstant.E,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Cuatro - Cubano',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Dulcimer',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.C,
                    __1.NoteConstant.C,
                    __1.NoteConstant.C
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Dulcimer (Alternative)',
                rootNotes: [
                    __1.NoteConstant.D,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Mandola',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Solo Bass',
                rootNotes: [
                    __1.NoteConstant.FG,
                    __1.NoteConstant.B,
                    __1.NoteConstant.E,
                    __1.NoteConstant.A
                ],
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Bouzouki - Irish',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.F,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Bouzouki - Irish (Alternative)',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.D
                ],
                type: 0 /* INSTRUMENT */
            },
            {
                name: 'Fiddle',
                rootNotes: [
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A,
                    __1.NoteConstant.E
                ],
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 0 /* INSTRUMENT */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
            },
            {
                name: 'Tenor',
                rootNotes: [
                    __1.NoteConstant.C,
                    __1.NoteConstant.G,
                    __1.NoteConstant.D,
                    __1.NoteConstant.A
                ],
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
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
                type: 1 /* ALTERNATE_TUNING */
            }
        ];
        // sort the list alphabetically
        return _.sortBy(
        // use auto-incremented ids to prevent developer error
        _.map(
        // join the lists together
        _.union(instruments, tunings), function (instrument, index) {
            return __assign({}, instrument, { id: (index + 1) // start from NoteConstant.AB instead of NoteConstant.A
             });
        }), 'name');
    };
    return InstrumentsData;
}());
exports.InstrumentsData = InstrumentsData;
