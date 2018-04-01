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
var instrumentType_constant_1 = require("../../constants/instrumentType.constant");
var _ = require("lodash");
var InstrumentsData = /** @class */ (function () {
    function InstrumentsData() {
    }
    InstrumentsData.getAvailableInstruments = function () {
        var instruments = [
            {
                name: 'Guitar',
                rootNotes: [7, 0, 5, 10, 2, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bass Guitar',
                rootNotes: [7, 0, 5, 10],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bass Guitar - 5 String',
                rootNotes: [7, 0, 5, 10],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Violin',
                rootNotes: [10, 5, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Violin - Tenor',
                rootNotes: [10, 5, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Mandolin',
                rootNotes: [10, 5, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Ukulele - Baritone',
                rootNotes: [5, 10, 2, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Ukulele - Concert',
                rootNotes: [10, 3, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Ukulele - Soprano',
                rootNotes: [0, 5, 9, 2],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Ukulele - Tenor',
                rootNotes: [10, 3, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Cello',
                rootNotes: [3, 10, 5, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Viola',
                rootNotes: [3, 10, 5, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Banjo - Plectrum',
                rootNotes: [3, 10, 2, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Banjo - Tenor (Jazz)',
                rootNotes: [3, 10, 5, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Banjo - Tenor (Irish)',
                rootNotes: [10, 5, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Lyre',
                rootNotes: [0, 3, 7, 10, 2, 6, 9, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bajo Sexto',
                rootNotes: [7, 0, 5, 10, 2, 8],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Balalaika - Alto',
                rootNotes: [0, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Balalaika - Soprano',
                rootNotes: [7, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Cuatro',
                rootNotes: [2, 7, 0, 5, 10],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Cuatro - Cubano',
                rootNotes: [10, 3, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Dulcimer',
                rootNotes: [10, 3, 3, 3],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Dulcimer (Alternative)',
                rootNotes: [5, 5, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Mandola',
                rootNotes: [3, 10, 5, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Sitar',
                rootNotes: [3, 3, 10, 3, 10, 3, 8],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Solo Bass',
                rootNotes: [9, 2, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Dobro',
                rootNotes: [10, 2, 5, 10, 2, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Guitarron',
                rootNotes: [0, 5, 10, 3, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bouzouki',
                rootNotes: [3, 3, 8, 8, 0, 0, 5, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bouzouki (Alternative)',
                rootNotes: [5, 5, 0, 0, 5, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bouzouki - Irish',
                rootNotes: [3, 8, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Bouzouki - Irish (Alternative)',
                rootNotes: [10, 5, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Fiddle',
                rootNotes: [10, 5, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Vihuela',
                rootNotes: [0, 5, 10, 2, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Banduria',
                rootNotes: [11, 4, 9, 2, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Charango',
                rootNotes: [10, 3, 7, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Oud',
                rootNotes: [10, 0, 2, 7, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Oud (Alternative)',
                rootNotes: [2, 9, 2, 7, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Requinto',
                rootNotes: [0, 5, 10, 3, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Lute',
                rootNotes: [10, 10, 3, 3, 8, 8, 0, 0, 5, 5, 10, 10],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Zither',
                rootNotes: [0, 0, 5, 10, 3],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Guitar - Russian',
                rootNotes: [5, 10, 2, 5, 10, 2, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Pedal Steel Guitar',
                rootNotes: [2, 5, 7, 9, 11, 2, 7, 11, 6, 9],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            },
            {
                name: 'Pedal Steel Guitar (Alternative)',
                rootNotes: [3, 8, 0, 3, 7, 10, 0, 3, 7, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.INSTRUMENT
            }
        ];
        var tunings = [
            {
                name: 'Major Seconds',
                rootNotes: [3, 5, 7, 9, 10, 1],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Minor Thirds',
                rootNotes: [3, 6, 9, 0, 3, 6],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Major Thirds',
                rootNotes: [7, 11, 3, 7, 11, 3],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'All Fourths',
                rootNotes: [7, 0, 5, 10, 3, 8],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Augmented Fourths',
                rootNotes: [3, 9, 3, 9, 3, 9],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'All Fifths',
                rootNotes: [3, 10, 5, 0, 7, 2],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Baritone',
                rootNotes: [2, 7, 0, 5, 9, 2],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Baritone (Alternative)',
                rootNotes: [0, 5, 10, 3, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Hawaiian',
                rootNotes: [7, 0, 7, 0, 4, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'New Standard',
                rootNotes: [3, 10, 5, 0, 7, 10],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Resophonic',
                rootNotes: [10, 2, 5, 10, 2, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Tenor',
                rootNotes: [3, 10, 5, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open A',
                rootNotes: [7, 0, 4, 7, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open B',
                rootNotes: [2, 9, 2, 9, 2, 6],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open C',
                rootNotes: [3, 10, 3, 10, 3, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open D',
                rootNotes: [5, 0, 5, 9, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Modal D',
                rootNotes: [5, 0, 5, 10, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open D Minor',
                rootNotes: [5, 0, 5, 8, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open E',
                rootNotes: [7, 2, 7, 11, 2, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open F',
                rootNotes: [8, 0, 3, 8, 0, 3],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open G',
                rootNotes: [5, 10, 5, 10, 2, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Modal G',
                rootNotes: [5, 10, 5, 10, 2, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Open G Minor',
                rootNotes: [7, 0, 4, 7, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Admiral',
                rootNotes: [3, 10, 5, 10, 2, 3],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Buzzard',
                rootNotes: [3, 8, 3, 10, 1, 8],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Face',
                rootNotes: [3, 10, 5, 10, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Four and Twenty',
                rootNotes: [5, 0, 5, 5, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Hot Type',
                rootNotes: [
                    0, 2, 7, 9, 0, 5
                ],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Layover',
                rootNotes: [5, 0, 3, 10, 3, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Magic Farmer',
                rootNotes: [3, 8, 3, 10, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Pelican',
                rootNotes: [5, 0, 5, 7, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Processional',
                rootNotes: [5, 10, 5, 8, 0, 1],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Slow Motion',
                rootNotes: [5, 10, 5, 8, 3, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Spirit',
                rootNotes: [4, 0, 4, 11, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Tarboulton',
                rootNotes: [3, 1, 3, 8, 1, 8],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Toulouse',
                rootNotes: [7, 3, 5, 8, 0, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Triqueen',
                rootNotes: [5, 10, 5, 9, 0, 2],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Minor Sixths',
                rootNotes: [3, 11, 7, 3, 11, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Major Sixths',
                rootNotes: [3, 0, 9, 6, 3, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Mandoguitar',
                rootNotes: [3, 10, 5, 0, 7, 2],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Pentatonic',
                rootNotes: [0, 3, 5, 7, 10, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Overtone',
                rootNotes: [3, 7, 10, 1, 3, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Lefty',
                rootNotes: [7, 2, 10, 5, 0, 7],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Cittern',
                rootNotes: [3, 8, 3, 10, 3, 5],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Cittern (Alternative)',
                rootNotes: [3, 10, 3, 10, 3, 10],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            },
            {
                name: 'Balalaika',
                rootNotes: [7, 0, 5, 7, 7, 0],
                type: instrumentType_constant_1.InstrumentTypeConstant.ALTERNATE_TUNING
            }
        ];
        // sort the list alphabetically
        return _.sortBy(
        // use auto-incremented ids to prevent developer error
        _.map(
        // join the lists together
        _.union(instruments, tunings), function (instrument, index) {
            return __assign({}, instrument, { id: (index + 1) // start from 1 instead of 0
             });
        }), 'name');
    };
    return InstrumentsData;
}());
exports.InstrumentsData = InstrumentsData;
