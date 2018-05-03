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
var instrumentType_constant_1 = require("../../constants/instrumentType.constant");
var _ = require("lodash");
var InstrumentsData = (function () {
    function InstrumentsData() {
    }
    InstrumentsData.getAvailableInstruments = function () {
        var instruments = [
            {
                name: 'Piano',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.CD,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.DE,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.GA,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.AB,
                    note_constant_1.NoteConstant.B
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.KEYED_INSTRUMENT
            },
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Bass Guitar',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Bass Guitar - 5 String',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Violin',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Violin - Tenor',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Mandolin',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Ukulele - Baritone',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Ukulele - Concert',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Ukulele - Soprano',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Ukulele - Tenor',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Cello',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Viola',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Banjo - Plectrum',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Banjo - Tenor (Jazz)',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Banjo - Tenor (Irish)',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Balalaika - Alto',
                rootNotes: [
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Balalaika - Soprano',
                rootNotes: [
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Cuatro - Cubano',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Dulcimer',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.C
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Dulcimer (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Mandola',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Solo Bass',
                rootNotes: [
                    note_constant_1.NoteConstant.FG,
                    note_constant_1.NoteConstant.B,
                    note_constant_1.NoteConstant.E,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Bouzouki (Four-Course)',
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Bouzouki (Three-Course)',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Bouzouki - Irish',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.F,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Bouzouki - Irish (Alternative)',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Fiddle',
                rootNotes: [
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.E
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
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
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
            {
                name: 'Baglamas',
                rootNotes: [
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.A,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.D
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.FRETTED_INSTRUMENT
            },
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Tenor',
                rootNotes: [
                    note_constant_1.NoteConstant.C,
                    note_constant_1.NoteConstant.G,
                    note_constant_1.NoteConstant.D,
                    note_constant_1.NoteConstant.A
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
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