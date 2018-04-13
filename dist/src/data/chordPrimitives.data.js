"use strict";
exports.__esModule = true;
var util_service_1 = require("../services/util.service");
var note_constant_1 = require("../../constants/note.constant");
var _ = require("lodash");
var scales_data_1 = require("./scales.data");
var ChordPrimitivesData = (function () {
    function ChordPrimitivesData() {
    }
    ChordPrimitivesData.getScaleNoteIndex = function (step, rootScaleLength) {
        return util_service_1.UtilService.modulo(parseInt(step, 10) - 1, rootScaleLength);
    };
    ChordPrimitivesData.compileChordPrimitivesIntoChords = function () {
        var _this = this;
        var chordPrimitives = this.getAvailableChordPrimitives();
        var noteLength = util_service_1.UtilService.getLengthOfEnum(note_constant_1.NoteConstant);
        var scales = scales_data_1.ScalesData.getAvailableScales();
        var chords = [];
        var chordNotes;
        var assembledChords = [];
        var rootNote;
        var scaleNoteIndex;
        var noteToAdd;
        var rootScale;
        var rootScaleLength;
        var chordDescription;
        var defaultScale = {
            name: 'Empty Scale',
            notes: [],
            type: 4,
            description: ''
        };
        for (var i = 0; i < noteLength; i++) {
            rootNote = util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[i]);
            assembledChords = _.map(chordPrimitives, function (chordPrimitive) {
                chordNotes = [];
                chordDescription = [];
                if (chordPrimitive.type === 1) {
                    rootScale = _.find(scales, function (scale) {
                        return scale.name.toLowerCase().indexOf('aeolian') !== -1 && scale.notes[0] === rootNote;
                    }) || defaultScale;
                }
                else {
                    rootScale = _.find(scales, function (scale) {
                        return scale.name.toLowerCase().indexOf('ionian') !== -1 && scale.notes[0] === rootNote;
                    }) || defaultScale;
                }
                if (!!rootScale) {
                    rootScaleLength = rootScale.notes.length;
                    _.each(chordPrimitive.steps, function (step) {
                        if (step.indexOf('b') !== -1) {
                            if (step.indexOf('bb') !== -1) {
                                scaleNoteIndex = _this.getScaleNoteIndex(step.substr(2, step.length), rootScaleLength);
                                noteToAdd = util_service_1.UtilService.modulo(rootScale.notes[scaleNoteIndex] - 2, noteLength);
                            }
                            else {
                                scaleNoteIndex = _this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                                noteToAdd = util_service_1.UtilService.modulo(rootScale.notes[scaleNoteIndex] - 1, noteLength);
                            }
                        }
                        else if (step.indexOf('#') !== -1) {
                            scaleNoteIndex = _this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                            noteToAdd = util_service_1.UtilService.modulo(rootScale.notes[scaleNoteIndex] + 1, noteLength);
                        }
                        else if (step.indexOf('(') !== -1) {
                            scaleNoteIndex = _this.getScaleNoteIndex(step.substr(1, step.length), rootScaleLength);
                            noteToAdd = rootScale.notes[scaleNoteIndex];
                        }
                        else {
                            scaleNoteIndex = _this.getScaleNoteIndex(step, rootScaleLength);
                            noteToAdd = rootScale.notes[scaleNoteIndex];
                        }
                        var noteDescription = util_service_1.UtilService.getFormattedNoteString(util_service_1.UtilService.getEnumFromStringKey(note_constant_1.NoteConstant, note_constant_1.NoteConstant[noteToAdd]), chordNotes);
                        if (step.indexOf('(') !== -1) {
                            noteDescription = ['(', noteDescription, ')'].join('');
                        }
                        chordDescription.push(noteDescription);
                        chordNotes.push(noteToAdd);
                    });
                    return {
                        name: [util_service_1.UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                        notes: _.sortBy(_.uniq(chordNotes)),
                        type: chordPrimitive.type,
                        description: _.sortBy(_.uniq(chordDescription), function (noteDescription) {
                            if (noteDescription.indexOf('(') !== -1) {
                                return noteDescription.substr(1, noteDescription.length);
                            }
                            else {
                                return noteDescription;
                            }
                        }).join(', ')
                    };
                }
                else {
                    return {
                        name: [util_service_1.UtilService.getFormattedNoteString(rootNote), chordPrimitive.name].join(' '),
                        notes: [],
                        type: chordPrimitive.type,
                        description: _.sortBy(_.uniq(chordDescription)).join(', ')
                    };
                }
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
                type: 0
            },
            {
                name: 'Major Sixth',
                steps: ['1', '3', '5', '6'],
                type: 0
            },
            {
                name: 'Six Nine',
                steps: ['1', '3', '5', '6', '9'],
                type: 0
            },
            {
                name: 'Added Ninth',
                steps: ['1', '3', '5', '9'],
                type: 0
            },
            {
                name: 'Major Seventh',
                steps: ['1', '3', '5', '7'],
                type: 0
            },
            {
                name: 'Major Seventh Flat Five',
                steps: ['1', '3', 'b5', '7'],
                type: 0
            },
            {
                name: 'Major Seventh Sharp Five',
                steps: ['1', '3', '#5', '7'],
                type: 0
            },
            {
                name: 'Major Ninth',
                steps: ['1', '3', '5', '7', '9'],
                type: 0
            },
            {
                name: 'Major Eleventh',
                steps: ['1', '3', '5', '7', '(9)', '11'],
                type: 0
            },
            {
                name: 'Major Thirteenth',
                steps: ['1', '3', '5', '7', '(9)', '(11)', '13'],
                type: 0
            },
            {
                name: 'Major Seven Sharp Eleventh',
                steps: ['1', '3', '5', '7', '#11'],
                type: 0
            },
            {
                name: 'Major Flat Five',
                steps: ['1', '3', 'b5'],
                type: 0
            },
            {
                name: 'Minor',
                steps: ['1', 'b3', '5'],
                type: 1
            },
            {
                name: 'Minor Sixth',
                steps: ['1', 'b3', '5', '6'],
                type: 1
            },
            {
                name: 'Minor Seventh',
                steps: ['1', 'b3', '5', 'b7'],
                type: 1
            },
            {
                name: 'Minor Added Ninth',
                steps: ['1', 'b3', '5', '9'],
                type: 1
            },
            {
                name: 'Minor Six Add Nine',
                steps: ['1', 'b3', '5', '6', '9'],
                type: 1
            },
            {
                name: 'Minor Ninth',
                steps: ['1', 'b3', '5', 'b7', '9'],
                type: 1
            },
            {
                name: 'Minor Eleventh',
                steps: ['1', 'b3', '5', 'b7', '(9)', '11'],
                type: 1
            },
            {
                name: 'Minor Thirteenth',
                steps: ['1', 'b3', '5', 'b7', '(9)', '(11)', '13'],
                type: 1
            },
            {
                name: 'Minor Major Seventh',
                steps: ['1', 'b3', '5', '7'],
                type: 1
            },
            {
                name: 'Minor Major Ninth',
                steps: ['1', 'b3', '5', '7', '9'],
                type: 1
            },
            {
                name: 'Minor Major Eleventh',
                steps: ['1', 'b3', '5', '7', '(9)', '11'],
                type: 1
            },
            {
                name: 'Minor Major Thirteenth',
                steps: ['1', 'b3', '5', '7', '(9)', '(11)', '13'],
                type: 1
            },
            {
                name: 'Minor Seven Flat Fifth',
                steps: ['1', 'b3', 'b5', 'b7'],
                type: 1
            },
            {
                name: 'Seventh',
                steps: ['1', '3', '5', 'b7'],
                type: 2
            },
            {
                name: 'Ninth',
                steps: ['1', '3', '5', 'b7', '9'],
                type: 2
            },
            {
                name: 'Eleventh',
                steps: ['1', '(3)', '5', 'b7', '(9)', '11'],
                type: 2
            },
            {
                name: 'Thirteenth',
                steps: ['1', '3', '5', 'b7', '(9)', '(11)', '13'],
                type: 2
            },
            {
                name: 'Seven Sharp Five',
                steps: ['1', '3', '#5', 'b7'],
                type: 2
            },
            {
                name: 'Seven Flat Five',
                steps: ['1', '3', 'b5', 'b7'],
                type: 2
            },
            {
                name: 'Seven Flat Ninth',
                steps: ['1', '3', '5', 'b7', 'b9'],
                type: 2
            },
            {
                name: 'Seven Sharp Ninth',
                steps: ['1', '3', '5', 'b7', '#9'],
                type: 2
            },
            {
                name: 'Nine Sharp Five',
                steps: ['1', '3', '#5', 'b7', '9'],
                type: 2
            },
            {
                name: 'Nine Flat Five',
                steps: ['1', '3', 'b5', 'b7', '9'],
                type: 2
            },
            {
                name: 'Seven Sharp Five Sharp Nine',
                steps: ['1', '3', '#5', 'b7', '#9'],
                type: 2
            },
            {
                name: 'Seven Sharp Five Flat Nine',
                steps: ['1', '3', '#5', 'b7', 'b9'],
                type: 2
            },
            {
                name: 'Seven Flat Five Sharp Nine',
                steps: ['1', '3', 'b5', 'b7', '#9'],
                type: 2
            },
            {
                name: 'Seven Flat Five Flat Nine',
                steps: ['1', '3', 'b5', 'b7', 'b9'],
                type: 2
            },
            {
                name: 'Seven Sharp Eleven',
                steps: ['1', '3', '5', 'b7', '#11'],
                type: 2
            },
            {
                name: 'Diminished',
                steps: ['1', 'b3', 'b5'],
                type: 3
            },
            {
                name: 'Diminished Seventh',
                steps: ['1', 'b3', 'b5', 'bb7'],
                type: 3
            },
            {
                name: 'Half Diminished',
                steps: ['1', 'b3', 'b5', 'b7'],
                type: 3
            },
            {
                name: 'Augmented',
                steps: ['1', '3', '#5'],
                type: 3
            },
            {
                name: 'Augmented Seventh',
                steps: ['1', '3', '#5', 'b7'],
                type: 3
            },
            {
                name: 'Fifth',
                steps: ['1', '5'],
                type: 4
            },
            {
                name: 'Flat Fifth',
                steps: ['1', 'b5'],
                type: 4
            },
            {
                name: 'Suspended Fourth',
                steps: ['1', '4', '5'],
                type: 4
            },
            {
                name: 'Suspended Second',
                steps: ['1', '2', '5', '(9)'],
                type: 4
            },
            {
                name: 'Suspended Seventh',
                steps: ['1', '4', '5', 'b7'],
                type: 4
            },
            {
                name: 'Sharp Eleven',
                steps: ['1', '5', '#11'],
                type: 4
            }
        ];
    };
    return ChordPrimitivesData;
}());
exports.ChordPrimitivesData = ChordPrimitivesData;
//# sourceMappingURL=chordPrimitives.data.js.map