"use strict";
exports.__esModule = true;
var util_service_1 = require("../services/util.service");
var __1 = require("../..");
var _ = require("lodash");
var scales_data_1 = require("./scales.data");
var ChordPrimitivesData = /** @class */ (function () {
    function ChordPrimitivesData() {
    }
    ChordPrimitivesData.moduloChordNoteIndex = function (noteIndex, lengthOfScale) {
        return (noteIndex - 1) % lengthOfScale; // correlate step to 0-indexed scale note array
    };
    ChordPrimitivesData.compileChordPrimitivesIntoChords = function () {
        var _this = this;
        var chordPrimitives = this.getAvailableChordPrimitives();
        var noteLength = util_service_1.UtilService.getLengthOfEnum(__1.NoteConstant);
        var scales = scales_data_1.ScalesData.getAvailableScales();
        var chords = [];
        var chordNotes;
        var assembledChords = [];
        var rootNote;
        var noteIndex;
        var rootScale;
        var rootScaleLength;
        // loop through each possible root note
        for (var i = 0; i < noteLength; i++) {
            rootNote = util_service_1.UtilService.getEnumFromStringKey(__1.NoteConstant, __1.NoteConstant[i]);
            // compile each scale for the given root note
            assembledChords = _.map(chordPrimitives, function (chordPrimitive) {
                chordNotes = [];
                if (chordPrimitive.type === 1 /* MINOR */) {
                    // use minor scale as basis for selecting notes
                    rootScale = _.find(scales, function (scale) {
                        return scale.name.toLowerCase().indexOf('aeolian') !== -1 && scale.notes[0] === rootNote;
                    });
                }
                else {
                    // use major scale as basis for selecting notes
                    rootScale = _.find(scales, function (scale) {
                        return scale.name.toLowerCase().indexOf('ionian') !== -1 && scale.notes[0] === rootNote;
                    });
                }
                rootScaleLength = rootScale.notes.length;
                // use the steps to determine the correct note sequence
                _.each(chordPrimitive.steps, function (step) {
                    if (step.indexOf('b') !== -1) {
                        // todo, verify note generation is correct for non-major chords
                        if (step.indexOf('bb') !== -1) {
                            noteIndex = _this.moduloChordNoteIndex(parseInt(step.substr(2, step.length), 10), rootScaleLength) - 2;
                            chordNotes.push(rootScale.notes[noteIndex]);
                        }
                        else {
                            noteIndex = _this.moduloChordNoteIndex(parseInt(step.substr(1, step.length), 10), rootScaleLength) - 1;
                            chordNotes.push(rootScale.notes[noteIndex]);
                        }
                    }
                    else if (step.indexOf('#') !== -1) {
                        noteIndex = _this.moduloChordNoteIndex(parseInt(step.substr(1, step.length), 10), rootScaleLength) + 1;
                        chordNotes.push(rootScale.notes[noteIndex]);
                    }
                    else if (step.indexOf('(') !== -1) {
                        noteIndex = _this.moduloChordNoteIndex(parseInt(step.substr(1, step.length - 1), 10), rootScaleLength);
                        chordNotes.push(rootScale.notes[noteIndex]);
                    }
                    else {
                        noteIndex = _this.moduloChordNoteIndex(parseInt(step, 10), rootScaleLength);
                        chordNotes.push(rootScale.notes[noteIndex]);
                    }
                });
                return {
                    name: [util_service_1.UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                    notes: _.sortBy(_.uniq(chordNotes)),
                    type: chordPrimitive.type
                };
            });
            chords = chords.concat(assembledChords);
        }
        return chords;
    };
    ChordPrimitivesData.getAvailableChordPrimitives = function () {
        return [
            {
                name: 'Major',
                steps: ['1', '3', '5'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Sixth',
                steps: ['1', '3', '5', '6'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Six Nine',
                steps: ['1', '3', '5', '6', '9'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Added Ninth',
                steps: ['1', '3', '5', '9'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Seventh',
                steps: ['1', '3', '5', '7'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Seventh Flat Five',
                steps: ['1', '3', 'b5', '7'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Seventh Sharp Five',
                steps: ['1', '3', '#5', '7'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Ninth',
                steps: ['1', '3', '5', '7', '9'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Eleventh',
                steps: ['1', '3', '5', '7', '(9)', '11'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Thirteenth',
                steps: ['1', '3', '5', '7', '(9)', '(11)', '13'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Seven Sharp Eleventh',
                steps: ['1', '3', '5', '7', '#11'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Major Flat Five',
                steps: ['1', '3', 'b5'],
                type: 0 /* MAJOR */
            },
            {
                name: 'Minor',
                steps: ['1', 'b3', '5'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Sixth',
                steps: ['1', 'b3', '5', '6'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Seventh',
                steps: ['1', 'b3', '5', 'b7'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Added Ninth',
                steps: ['1', 'b3', '5', '9'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Six Add Nine',
                steps: ['1', 'b3', '5', '6', '9'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Ninth',
                steps: ['1', 'b3', '5', 'b7', '9'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Eleventh',
                steps: ['1', 'b3', '5', 'b7', '(9)', '11'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Thirteenth',
                steps: ['1', 'b3', '5', 'b7', '(9)', '(11)', '13'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Major Seventh',
                steps: ['1', 'b3', '5', '7'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Major Ninth',
                steps: ['1', 'b3', '5', '7', '9'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Major Eleventh',
                steps: ['1', 'b3', '5', '7', '(9)', '11'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Major Thirteenth',
                steps: ['1', 'b3', '5', '7', '(9)', '(11)', '13'],
                type: 1 /* MINOR */
            },
            {
                name: 'Minor Seven Flat Fifth',
                steps: ['1', 'b3', 'b5', 'b7'],
                type: 1 /* MINOR */
            },
            {
                name: 'Seventh',
                steps: ['1', '3', '5', 'b7'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Ninth',
                steps: ['1', '3', '5', 'b7', '9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Eleventh',
                steps: ['1', '(3)', '5', 'b7', '(9)', '11'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Thirteenth',
                steps: ['1', '3', '5', 'b7', '(9)', '(11)', '13'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Sharp Five',
                steps: ['1', '3', '#5', 'b7'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Flat Five',
                steps: ['1', '3', 'b5', 'b7'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Flat Ninth',
                steps: ['1', '3', '5', 'b7', 'b9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Sharp Ninth',
                steps: ['1', '3', '5', 'b7', '#9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Nine Sharp Five',
                steps: ['1', '3', '#5', 'b7', '9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Nine Flat Five',
                steps: ['1', '3', 'b5', 'b7', '9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Sharp Five Sharp Nine',
                steps: ['1', '3', '#5', 'b7', '#9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Sharp Five Flat Nine',
                steps: ['1', '3', '#5', 'b7', 'b9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Flat Five Sharp Nine',
                steps: ['1', '3', 'b5', 'b7', '#9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Flat Five Flat Nine',
                steps: ['1', '3', 'b5', 'b7', 'b9'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Seven Sharp Eleven',
                steps: ['1', '3', '5', 'b7', '#11'],
                type: 2 /* DOMINANT */
            },
            {
                name: 'Diminished',
                steps: ['1', 'b3', 'b5'],
                type: 3 /* SYMMETRICAL */
            },
            {
                name: 'Diminished Seventh',
                steps: ['1', 'b3', 'b5', 'bb7'],
                type: 3 /* SYMMETRICAL */
            },
            {
                name: 'Half Diminished',
                steps: ['1', 'b3', 'b5', 'b7'],
                type: 3 /* SYMMETRICAL */
            },
            {
                name: 'Augmented',
                steps: ['1', '3', '#5'],
                type: 3 /* SYMMETRICAL */
            },
            {
                name: 'Augmented Seventh',
                steps: ['1', '3', '#5', 'b7'],
                type: 3 /* SYMMETRICAL */
            },
            {
                name: 'Fifth',
                steps: ['1', '5'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Flat Fifth',
                steps: ['1', 'b5'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Suspended Fourth',
                steps: ['1', '4', '5'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Suspended Second',
                steps: ['1', '2', '5', '(9)'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Suspended Seventh',
                steps: ['1', '4', '5', 'b7'],
                type: 4 /* MISCELLANEOUS */
            },
            {
                name: 'Sharp Eleven',
                steps: ['1', '5', '#11'],
                type: 4 /* MISCELLANEOUS */
            }
        ];
    };
    return ChordPrimitivesData;
}());
exports.ChordPrimitivesData = ChordPrimitivesData;
